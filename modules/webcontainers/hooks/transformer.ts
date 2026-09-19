import type { TemplateFile, TemplateFolder, TemplateItem } from "@/modules/playground/lib/path-to-json";

interface WebContainerFile {
  file: {
    contents: string;
  };
}

interface WebContainerDirectory {
  directory: {
    [key: string]: WebContainerFile | WebContainerDirectory;
  };
}

export type WebContainerFileSystem = Record<string, WebContainerFile | WebContainerDirectory>;

function getItemKey(item: TemplateItem): string {
  if ("folderName" in item && item.folderName) {
    return item.folderName;
  }
  const file = item as TemplateFile;
  return file.fileExtension ? `${file.filename}.${file.fileExtension}` : file.filename;
}

export function transformToWebContainerFormat(template: TemplateFolder): WebContainerFileSystem {
  function processItem(item: TemplateItem): WebContainerFile | WebContainerDirectory {
    if ("folderName" in item && Array.isArray(item.items)) {
      // This is a directory
      const directoryContents: WebContainerFileSystem = {};

      item.items.forEach((subItem) => {
        const key = getItemKey(subItem);
        directoryContents[key] = processItem(subItem);
      });

      return {
        directory: directoryContents,
      };
    } else {
      // This is a file
      const file = item as TemplateFile;
      return {
        file: {
          contents: file.content ?? "",
        },
      };
    }
  }

  const result: WebContainerFileSystem = {};

  if (template?.items && Array.isArray(template.items)) {
    template.items.forEach((item) => {
      const key = getItemKey(item);
      result[key] = processItem(item);
    });
  }

  return result;
}