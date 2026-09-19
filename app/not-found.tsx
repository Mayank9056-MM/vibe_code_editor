import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Code2, Compass, Home, LayoutDashboard, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/10">
      {/* Top Navigation Bar */}
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

          <div className="flex items-center gap-3">
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

      {/* Main 404 Hero */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Badge & Visual Identifier */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/70 bg-muted/40 text-muted-foreground text-xs font-mono font-medium shadow-2xs">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            <span>ERR_404: ROUTE_NOT_FOUND</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground font-sans">
              Lost in the codebase?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              The page you are looking for doesn&apos;t exist, was moved, or might be temporarily inaccessible.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="w-full sm:w-auto h-11 px-6 rounded-xl font-medium gap-2 shadow-sm">
              <Link href="/dashboard">
                <LayoutDashboard className="h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-medium gap-2 border-border/80 hover:bg-muted/50"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Quick Helpful Destinations */}
          <div className="pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/dashboard"
              className="group p-4 rounded-xl border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5 text-foreground font-medium text-sm">
                <LayoutDashboard className="h-4 w-4 text-primary" />
                <span>Dashboard</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Manage and resume your cloud development workspaces.
              </p>
            </Link>

            <Link
              href="/auth/sign-in"
              className="group p-4 rounded-xl border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5 text-foreground font-medium text-sm">
                <Code2 className="h-4 w-4 text-primary" />
                <span>Authentication</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Sign in to sync your playgrounds and cloud environments.
              </p>
            </Link>

            <Link
              href="/"
              className="group p-4 rounded-xl border border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5 text-foreground font-medium text-sm">
                <Compass className="h-4 w-4 text-primary" />
                <span>Explore</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Learn about instant fullstack WebContainers and AI coding.
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} CodeNest. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">Workspaces</Link>
            <Link href="/auth/sign-in" className="hover:text-foreground transition-colors">Sign In</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
