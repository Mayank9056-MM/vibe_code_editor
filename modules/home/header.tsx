"use client";

import Link from "next/link";
import Image from "next/image";
import UserButton from "../auth/components/user-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Github, LayoutDashboard, Terminal } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full px-4 pt-3 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-card border border-border shadow-xs transition-transform group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="CodeNest Logo"
                  height={24}
                  width={24}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight text-foreground">
                  Code<span className="text-primary font-semibold">Nest</span>
                </span>
                <span className="hidden md:inline-flex text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/60">
                  IDE
                </span>
              </div>
            </Link>

            <span className="hidden sm:inline-block text-border">|</span>

            {/* Nav Links */}
            <nav className="hidden sm:flex items-center gap-4 text-sm font-medium">
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </nav>
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-2.5">
            <Link href="/dashboard" className="hidden sm:inline-flex">
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 text-xs font-medium rounded-lg"
              >
                <Terminal className="h-3.5 w-3.5" />
                <span>Open Editor</span>
              </Button>
            </Link>

            <ThemeToggle />
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}
