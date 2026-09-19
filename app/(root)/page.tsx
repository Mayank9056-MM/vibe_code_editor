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
    icon: <Cpu className="h-5 w-5 text-rose-500" />,
    title: "WebContainer Runtime",
    description:
      "Execute Node.js directly inside your browser. No remote servers or slow cold starts required.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-pink-500" />,
    title: "AI Autocomplete",
    description:
      "Context-aware inline code suggestions and generation tailored to your active file and framework.",
  },
  {
    icon: <Code2 className="h-5 w-5 text-cyan-500" />,
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
      <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 backdrop-blur-sm shadow-xs mb-8 transition-transform hover:scale-105">
        <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
        <span>Next-Generation In-Browser Cloud IDE</span>
      </div>

      {/* Main Hero Header */}
      <div className="text-center max-w-4xl space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          Code with Instant Flow &amp;{" "}
          <span className="bg-linear-to-r from-rose-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            AI Intelligence
          </span>
        </h1>

        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
          VibeCode Editor brings full-stack development to your browser. Powered by
          WebContainers, Monaco Editor, and intelligent AI code completion — write, debug,
          and run code with zero configuration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-12 px-6 gap-2 text-sm font-semibold rounded-xl bg-linear-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white shadow-lg shadow-rose-500/25 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>Launch Editor</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 gap-2 text-sm font-semibold rounded-xl border-border hover:bg-muted/60 cursor-pointer"
            >
              <Layers className="h-4 w-4" />
              <span>Browse Templates</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Illustration / Preview Card */}
      <div className="relative mt-14 w-full max-w-4xl rounded-2xl border border-border/80 bg-card/60 p-2 sm:p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50 mb-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="mx-auto text-xs text-muted-foreground font-mono bg-muted/60 px-3 py-1 rounded-md">
            vibecode://app/playground
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-muted/30 border border-border/40 flex items-center justify-center py-8">
          <Image
            src="/hero.svg"
            alt="VibeCode Interactive IDE Preview"
            height={460}
            width={720}
            className="w-full max-w-xl h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
            priority
          />
        </div>
      </div>

      {/* Framework Support Grid */}
      <div className="mt-20 w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-rose-500" />
          <span>Supported Frameworks &amp; Stacks</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-border/60 bg-card/40 hover:bg-card/90 hover:border-rose-500/40 transition-all hover:shadow-md hover:-translate-y-0.5"
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
              <span className="text-sm font-bold text-foreground">{fw.name}</span>
              <span className="text-[11px] text-muted-foreground line-clamp-1">{fw.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card/40 hover:bg-card/80 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-muted/60 border border-border/40 shrink-0">
              {feat.icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">{feat.title}</h3>
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
