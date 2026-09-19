"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = () => {
    switch (error) {
      case "Configuration":
        return {
          title: "Database Connection Issue",
          description:
            "Authentication service was unable to connect to the database. If using MongoDB Atlas, please check that your cluster is active (not paused) and your DATABASE_URL in .env is correct.",
        };
      case "AccessDenied":
        return {
          title: "Access Denied",
          description:
            "You do not have permission to sign in with this account. Please contact the administrator.",
        };
      case "Verification":
        return {
          title: "Verification Failed",
          description:
            "The verification link has expired or has already been used. Please request a new link.",
        };
      case "OAuthSignin":
      case "OAuthCallback":
        return {
          title: "OAuth Provider Error",
          description:
            "An error occurred while communicating with the OAuth provider. Please try signing in again.",
        };
      default:
        return {
          title: "Authentication Error",
          description:
            "An unexpected error occurred during authentication. Please try again or verify your server configuration.",
        };
    }
  };

  const { title, description } = getErrorMessage();

  return (
    <Card className="w-full border-border/80 bg-card/90 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden">
      <CardHeader className="space-y-3 text-center pb-4">
        {/* Brand Logo */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 shadow-md">
          <Image
            src="/logo.svg"
            alt="VibeCode Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="p-1.5 rounded-full bg-destructive/10 text-destructive">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-foreground">
            {title}
          </CardTitle>
        </div>

        <CardDescription className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 pb-4">
        {error === "Configuration" && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-3 text-xs text-muted-foreground space-y-1 text-left">
            <div className="font-semibold text-destructive flex items-center gap-1.5">
              <span>Diagnostics:</span>
            </div>
            <p className="font-mono text-[11px] text-foreground/80 break-all">
              Error code: {error}
            </p>
            <p className="text-[11px]">
              Verify that the MongoDB Atlas cluster in your <code className="text-foreground">DATABASE_URL</code> is online and allows connections from your IP.
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row gap-2.5 px-6 pt-2 pb-6">
        <Button asChild className="w-full h-10 font-medium gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer">
          <Link href="/auth/sign-in">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full h-10 font-medium gap-2 rounded-xl border-border/80 hover:bg-accent transition-all cursor-pointer">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Go to Home
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-8">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <AuthErrorContent />
    </Suspense>
  );
}
