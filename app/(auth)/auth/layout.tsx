import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Top Bar Navigation */}
      <header className="absolute top-4 left-4 right-4 flex items-center justify-between max-w-5xl mx-auto z-10">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1.5 text-xs font-semibold hover:bg-muted/80">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </Link>
        <ThemeToggle />
      </header>

      {/* Main Auth Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
