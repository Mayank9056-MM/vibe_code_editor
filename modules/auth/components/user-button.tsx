"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogOut, User as UserIcon, LayoutDashboard } from "lucide-react";
import LogoutButton from "./logout-button";
import { useCurrentUser } from "../hooks/use-current-user";

const UserButton = () => {
  const user = useCurrentUser();

  if (!user) {
    return (
      <Link href="/auth/sign-in">
        <Button
          size="sm"
          className="h-8 px-3 text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-all shadow-xs cursor-pointer"
        >
          Sign In
        </Button>
      </Link>
    );
  }

  const initials = (user.name || user.email || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-hidden">
        <div className={cn("relative rounded-full ring-2 ring-border/50 hover:ring-rose-500/50 transition-all cursor-pointer")}>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user.image ?? undefined}
              alt={user.name ?? "User avatar"}
              className="object-cover"
            />
            <AvatarFallback className="bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold text-xs">
              {initials || <UserIcon className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-1.5 shadow-lg">
        <div className="px-2 py-1.5">
          <p className="text-sm font-semibold truncate text-foreground">
            {user.name || "User"}
          </p>
          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer">
            <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem className="text-rose-600 dark:text-rose-400 focus:text-rose-600 focus:bg-rose-50 dark:focus:bg-rose-950/30 cursor-pointer">
            <LogOut className="h-4 w-4 mr-2" />
            <span>Log Out</span>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
