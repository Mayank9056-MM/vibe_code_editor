import React from "react";
import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-primary/10 dark:bg-primary/5 rounded-full blur-xl pointer-events-none" />
        <Image
          src="/empty-state.svg"
          alt="No projects found"
          width={192}
          height={192}
          className="relative w-44 h-44 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="text-xl font-bold text-foreground">No projects yet</h2>
      <p className="text-sm text-muted-foreground max-w-sm mt-1 mb-6">
        Select a template above to spin up a new high-performance cloud playground in seconds.
      </p>
    </div>
  );
};

export default EmptyState;