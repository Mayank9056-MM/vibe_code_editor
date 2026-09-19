import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight">
            CodeNest <span className="text-primary font-medium">Editor</span>
          </span>
          <span className="text-xs text-muted-foreground">
            • Production-grade Cloud Development
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CodeNest Editor. Built for modern engineers.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-accent"
            aria-label="GitHub repository"
          >
            <Github className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}