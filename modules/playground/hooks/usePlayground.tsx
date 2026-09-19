import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import type { TemplateFolder } from "../lib/path-to-json";
import { getPlaygroundById, SaveUpdatedCode } from "../actions";

export interface PlaygroundData {
  id: string;
  title: string;
  description?: string | null;
  templateFiles?: {
    content: unknown;
  }[];
  [key: string]: unknown;
}

interface UsePlaygroundReturn {
  playgroundData: PlaygroundData | null;
  templateData: TemplateFolder | null;
  isLoading: boolean;
  error: string | null;
  loadPlayground: () => Promise<void>;
  saveTemplateData: (data: TemplateFolder) => Promise<void>;
}

export const usePlayground = (id: string): UsePlaygroundReturn => {
  const [playgroundData, setPlaygroundData] = useState<PlaygroundData | null>(
    null
  );
  const [templateData, setTemplateData] = useState<TemplateFolder | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadPlayground = useCallback(async () => {
    if (!id) return;

    try {
      setIsLoading(true);
      setError(null);

      const data = await getPlaygroundById(id);

      if (data) {
        setPlaygroundData(data);
      }
      const rawContent = data?.templateFiles?.[0]?.content;

      if (typeof rawContent === "string") {
        try {
          const parsedContent = JSON.parse(rawContent);
          setTemplateData(parsedContent);
          toast.success("playground loaded successfully");
          return;
        } catch {
          // fallback to api
        }
      } else if (rawContent && typeof rawContent === "object") {
        setTemplateData(rawContent as unknown as TemplateFolder);
        toast.success("playground loaded successfully");
        return;
      }

      const res = await fetch(`/api/template/${id}`);

      console.log("res", res);

      if (!res.ok) throw new Error(`Failed to laod template: ${res.status}`);

      const templateRes = await res.json();

      if (templateRes.templateJson && Array.isArray(templateRes.templateJson)) {
        setTemplateData({
          folderName: "Root",
          items: templateRes.templateJson || {
            foldername: "Root",
            items: templateRes.templateJson,
          },
        });
      } else {
        setTemplateData(
          templateRes.templateJson || {
            folderName: "Root",
            items: [],
          }
        );
      }

      toast.success("Template loaded successfully");
    } catch (error) {
      console.error("Error loading playground:", error);
      setError("Failed to load playground data");
      toast.error("Failed to load playground data");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const saveTemplateData = useCallback(
    async (data: TemplateFolder) => {
      try {
        await SaveUpdatedCode(id, data);

        setTemplateData(data);
        toast.success("Changes saved successfully");
      } catch (error) {
        console.error("Error saving template data", error);
        toast.error("Failed to save changes");
        throw error;
      }
    },
    [id]
  );

  useEffect(() => {
    loadPlayground();
  }, [loadPlayground]);

  return {
    playgroundData,
    templateData,
    isLoading,
    error,
    loadPlayground,
    saveTemplateData,
  };
};
