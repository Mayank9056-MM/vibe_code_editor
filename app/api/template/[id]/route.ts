import { db } from "@/lib/db";
import { templatePaths } from "@/lib/template";
import {
  readTemplateStructureFromJson,
  saveTemplateStructureToJson,
  TemplateFolder,
} from "@/modules/playground/lib/path-to-json";
import path from "path";
import fs from "fs/promises";
import { NextRequest } from "next/server";
import { currentUser } from "@/modules/auth/actions";

function validateJsonStructure(data: unknown): boolean {
  try {
    JSON.parse(JSON.stringify(data));
    return true;
  } catch (error) {
    console.log("Invalid JSON struture:", error);
    return false;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return Response.json({ error: "Missing playground ID" }, { status: 400 });
  }

  const playground = await db.playground.findUnique({
    where: { id },
  });

  if (!playground) {
    return Response.json({ error: "Playground not found" }, { status: 404 });
  }

  const templateKey = playground.template as keyof typeof templatePaths;
  const templatePath = templatePaths[templateKey];

  if (!templatePath) {
    return Response.json({ erro: "Invalid template" }, { status: 404 });
  }

  try {
    const inputPath = path.join(process.cwd(), templatePath);
    const outputFile = path.join(process.cwd(), `output/${templateKey}.json`);

    await saveTemplateStructureToJson(inputPath, outputFile);
    const result = await readTemplateStructureFromJson(outputFile);

    if (!validateJsonStructure(result.items)) {
      return Response.json(
        { error: "Invalid JSON structure" },
        { status: 500 }
      );
    }

    await fs.unlink(outputFile);

    return Response.json(
      { success: true, templateJson: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating template JSON:", error);
    return Response.json(
      { error: "Failed to generate template" },
      { status: 500 }
    );
  }
}

export const SaveUpdatedCode = async (
  playgroundId: string,
  data: TemplateFolder
) => {
  const user = await currentUser();

  if (!user) return null;

  try {
    const updatedPlaygroundd = await db.templateFile.upsert({
      where: {
        playgroundId,
      },
      update: {
        content: JSON.stringify(data),
      },
      create: {
        playgroundId,
        content: JSON.stringify(data),
      },
    });

    return updatedPlaygroundd;
  } catch (error) {
    console.log("SaveUpdatedCode error:", error);
    return null;
  }
};
