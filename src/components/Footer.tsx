import multiplayLogo from "@/assets/multiplay-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card py-10 lg:py-12">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={multiplayLogo} alt="Multiplay" className="h-7 w-auto" />
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p className="text-[13px] text-muted-foreground">
              © {new Date().getFullYear()} Multiplay — Centrum narzędzi i zasobów operacyjnych.
            </p>
            <p className="text-[11px] text-muted-foreground/60">
              Strona przeznaczona do użytku wewnętrznego zespołu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
