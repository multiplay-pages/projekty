import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projekty")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatured = () => {
    document.getElementById("wyrozniione")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Refined ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(138 40% 90%) 0%, transparent 70%)" }}
        />
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(138 35% 92%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-2xl text-center">
          {/* Pill badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/80 px-5 py-2 text-[13px] font-medium text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Centrum zasobów i narzędzi
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Twoje projekty
            <br />
            <span className="text-gradient-primary">w jednym miejscu</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Kalkulatory ofert, procedury, tabele procesowe, schematy i&nbsp;narzędzia
            wewnętrzne — uporządkowane i gotowe do&nbsp;użycia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
            <Button variant="hero" size="lg" onClick={scrollToProjects} className="h-12 rounded-xl text-[15px] font-semibold px-8">
              Przeglądaj projekty
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="hero-outline" size="lg" onClick={scrollToFeatured} className="h-12 rounded-xl text-[15px] font-semibold px-8">
              Wyróżnione narzędzia
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(100 8% 97%))" }}
      />
    </section>
  );
}
