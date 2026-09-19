import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Play,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const frameworks = [
  { name: "React", icon: "/react.svg", color: "#61DAFB", desc: "Component-driven UI" },
  { name: "Next.js", icon: "/nextjs-icon.svg", color: "#000000", desc: "Full-stack SSR & RSC" },
  { name: "Vue.js", icon: "/vuejs-icon.svg", color: "#42B883", desc: "Progressive web apps" },
  { name: "Express", icon: "/expressjs-icon.svg", color: "#68A063", desc: "Node.js REST APIs" },
  { name: "Hono", icon: "/hono.svg", color: "#E36002", desc: "Ultra-fast Web Standards" },
  { name: "Angular", icon: "/angular-2.svg", color: "#DD0031", desc: "Enterprise application suite" },
];

const features = [
  {
    icon: <Cpu className="h-5 w-5 text-indigo-500" />,
    title: "WebContainer Runtime",
    description:
      "Execute Node.js directly inside your browser. No remote servers or slow cold starts required.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-sky-500" />,
    title: "AI Autocomplete",
    description:
      "Context-aware inline code suggestions and generation tailored to your active file and framework.",
  },
  {
    icon: <Code2 className="h-5 w-5 text-emerald-500" />,
    title: "VS Code Core",
    description:
      "Full Monaco Editor integration with multi-cursor, syntax trees, shortcuts, and custom themes.",
  },
  {
    icon: <Zap className="h-5 w-5 text-amber-500" />,
    title: "Instant Live Preview",
    description:
      "Hot module reloading with real-time browser preview and integrated interactive terminal output.",
  },
];

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-start min-h-screen px-4 pb-20 pt-8 sm:pt-16 max-w-6xl mx-auto">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm shadow-xs mb-8 transition-transform hover:scale-[1.02]">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>In-Browser Cloud IDE &amp; Workspace</span>
      </div>

      {/* Main Hero Header */}
      <div className="text-center max-w-3xl space-y-5">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Develop, Preview &amp; Ship with Zero Setup
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
          CodeNest brings full-stack development directly into your browser. Powered by
          WebContainers, Monaco Editor, and intelligent code assistance — build and run
          framework templates in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-11 px-6 gap-2 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm cursor-pointer transition-all hover:scale-[1.01]"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>Launch Editor</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6 gap-2 text-sm font-medium rounded-xl border-border hover:bg-accent cursor-pointer"
            >
              <Layers className="h-4 w-4" />
              <span>Browse Templates</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Preview Card */}
      <div className="relative mt-12 w-full max-w-4xl rounded-2xl border border-border bg-card p-2 sm:p-4 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50 mb-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="mx-auto text-xs text-muted-foreground font-mono bg-muted/60 px-3 py-1 rounded-md">
            codenest://app/workspace
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-muted/20 border border-border/40 flex items-center justify-center py-8">
          <Image
            src="/hero.svg"
            alt="CodeNest Interactive IDE Preview"
            height={460}
            width={720}
            className="w-full max-w-xl h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
            priority
          />
        </div>
      </div>

      {/* Framework Support Grid */}
      <div className="mt-20 w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>Supported Frameworks &amp; Stacks</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-card hover:bg-accent/40 hover:border-border transition-all hover:shadow-xs hover:-translate-y-0.5"
            >
              <div className="h-10 w-10 relative flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                <Image
                  src={fw.icon}
                  alt={`${fw.name} logo`}
                  width={36}
                  height={36}
                  className="object-contain h-8 w-8"
                />
              </div>
              <span className="text-sm font-semibold text-foreground">{fw.name}</span>
              <span className="text-[11px] text-muted-foreground line-clamp-1">{fw.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:bg-accent/20 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-muted border border-border shrink-0">
              {feat.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">{feat.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
