"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global application error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 font-sans antialiased">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl border border-border bg-card shadow-lg">
          {/* Logo */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50 border border-border shadow-2xs">
            <Image
              src="/logo.svg"
              alt="CodeNest Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5" />
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Application Error
              </h1>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CodeNest encountered an unexpected issue while initializing the page. Please reload to restore your session.
            </p>
          </div>

          {error?.digest && (
            <div className="text-xs font-mono text-muted-foreground bg-muted/60 p-2 rounded border border-border">
              Reference: {error.digest}
            </div>
          )}

          <div className="pt-2">
            <Button
              onClick={() => reset()}
              size="lg"
              className="w-full h-11 rounded-xl font-medium gap-2 shadow-sm"
            >
              <RefreshCw className="h-4 w-4" />
              Reload Application
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
