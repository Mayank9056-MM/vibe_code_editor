"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Loader2,
  Power,
  PowerOff,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleAIProps {
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  suggestionLoading: boolean;
  loadingProgress?: number;
  activeFeature?: string;
}

const ToggleAI: React.FC<ToggleAIProps> = ({
  isEnabled,
  onToggle,
  suggestionLoading,
  loadingProgress = 0,
  activeFeature,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          size="sm" 
          variant={isEnabled ? "default" : "outline"}
          className={cn(
            "relative gap-2 h-8 px-3 text-sm font-medium transition-all duration-200 cursor-pointer",
            isEnabled 
              ? "bg-zinc-900 hover:bg-zinc-800 text-zinc-50 border-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 dark:border-zinc-200 shadow-sm" 
              : "bg-background hover:bg-accent text-foreground border-border",
            suggestionLoading && "opacity-75"
          )}
          onClick={(e) => e.preventDefault()}
        >
          {suggestionLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-rose-500" />
          ) : (
            <Sparkles className="h-4 w-4 text-rose-500" />
          )}
          <span>AI</span>
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              isEnabled ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-rose-500" />
            <span className="text-sm font-medium">AI Code Assistant</span>
          </div>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs font-semibold",
              isEnabled 
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" 
                : "bg-muted text-muted-foreground"
            )}
          >
            {isEnabled ? "Active" : "Disabled"}
          </Badge>
        </DropdownMenuLabel>
        
        {suggestionLoading && activeFeature && (
          <div className="px-3 pb-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{activeFeature}</span>
                <span>{Math.round(loadingProgress)}%</span>
              </div>
              <Progress 
                value={loadingProgress} 
                className="h-1.5"
              />
            </div>
          </div>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={() => onToggle(!isEnabled)}
          className="py-2.5 cursor-pointer"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              {isEnabled ? (
                <Power className="h-4 w-4 text-rose-500" />
              ) : (
                <PowerOff className="h-4 w-4 text-muted-foreground" />
              )}
              <div>
                <div className="text-sm font-medium">
                  {isEnabled ? "Disable" : "Enable"} AI Suggestions
                </div>
                <div className="text-xs text-muted-foreground">
                  Toggle inline code completion
                </div>
              </div>
            </div>
            <div className={cn(
              "w-8 h-4 rounded-full border transition-all duration-200 relative",
              isEnabled 
                ? "bg-zinc-900 border-zinc-900 dark:bg-zinc-50 dark:border-zinc-50" 
                : "bg-muted border-border"
            )}>
              <div className={cn(
                "w-3 h-3 rounded-full bg-background transition-all duration-200 absolute top-0.5",
                isEnabled ? "left-4" : "left-0.5"
              )} />
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleAI;
