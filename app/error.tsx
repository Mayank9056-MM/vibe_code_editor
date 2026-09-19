"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Home, LayoutDashboard, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    // Log client-side error cleanly to console for debugging without displaying raw traces to user
    console.error("CodeNest caught error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/10">
      {/* Top Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border/80 shadow-2xs group-hover:border-primary/40 transition-colors">
              <Image
                src="/logo.svg"
                alt="CodeNest Logo"
                width={22}
                height={22}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold text-base tracking-tight text-foreground">
              Code<span className="text-primary font-bold">Nest</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild size="sm" className="gap-1.5 rounded-lg shadow-2xs">
              <Link href="/dashboard">
                <LayoutDashboard className="h-3.5 w-3.5" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Error Presentation */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-20">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 shadow-2xs">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <div className="space-y-2.5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Something went wrong
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              An unexpected issue interrupted this operation. No data was lost, and your workspace remains safe.
            </p>
          </div>

          {error?.digest && (
            <div className="inline-block px-3 py-1 rounded-md bg-muted/60 border border-border/70 text-xs font-mono text-muted-foreground">
              Error Reference: <span className="font-semibold text-foreground">{error.digest}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              onClick={() => reset()}
              size="lg"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-medium gap-2 shadow-sm"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-medium gap-2 border-border/80 hover:bg-muted/50"
            >
              <Link href="/dashboard">
                <LayoutDashboard className="h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/80 pt-4">
            If this issue persists, please refresh your browser or try again in a few moments.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span>© {new Date().getFullYear()} CodeNest. All rights reserved.</span>
          <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
