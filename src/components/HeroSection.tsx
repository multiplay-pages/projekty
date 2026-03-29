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
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Small label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Centrum zasobów i narzędzi
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Twoje projekty
            <br />
            <span className="text-gradient-primary">w jednym miejscu</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Kalkulatory ofert, procedury, tabele procesowe, schematy i narzędzia
            wewnętrzne — wszystko uporządkowane i gotowe do użycia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="lg" onClick={scrollToProjects} className="text-base px-8">
              Przeglądaj projekty
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="hero-outline" size="lg" onClick={scrollToFeatured} className="text-base px-8">
              Wyróżnione narzędzia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
