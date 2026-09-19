"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  const getErrorMessage = () => {
    switch (error) {
      case "Configuration":
        return {
          title: "Connection Unavailable",
          description:
            "We were unable to connect to the authentication service. Please try again in a few moments.",
        };
      case "AccessDenied":
        return {
          title: "Access Denied",
          description:
            "You do not have permission to sign in with this account. Please try a different account.",
        };
      case "Verification":
        return {
          title: "Verification Expired",
          description:
            "The sign-in link is no longer valid or has expired. Please request a new link.",
        };
      case "OAuthSignin":
      case "OAuthCallback":
        return {
          title: "Sign In Cancelled",
          description:
            "The sign in process was interrupted or cancelled. Please try signing in again.",
        };
      default:
        return {
          title: "Authentication Problem",
          description:
            "We encountered an issue while processing your request. Please try again.",
        };
    }
  };

  const { title, description } = getErrorMessage();

  return (
    <Card className="w-full border-border bg-card shadow-lg rounded-2xl overflow-hidden">
      <CardHeader className="space-y-3 text-center pb-6">
        {/* Brand Logo */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-card border border-border shadow-xs">
          <Image
            src="/logo.svg"
            alt="CodeNest Logo"
            width={34}
            height={34}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="p-1.5 rounded-full bg-destructive/10 text-destructive">
            <AlertCircle className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-foreground">
            {title}
          </CardTitle>
        </div>

        <CardDescription className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col sm:flex-row gap-2.5 px-6 pt-2 pb-6">
        <Button asChild className="w-full h-10 font-medium gap-2 rounded-xl">
          <Link href="/auth/sign-in">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full h-10 font-medium gap-2 rounded-xl border-border hover:bg-accent">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
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
        <Card className="w-full border-border bg-card p-8">
          <div className="flex justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        </Card>
      }
    >
      <AuthErrorContent />
    </Suspense>
  );
}
