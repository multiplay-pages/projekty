import multiplayLogo from "@/assets/multiplay-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card py-12">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={multiplayLogo} alt="Multiplay" className="h-7 w-auto" />
          </div>
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Multiplay — Narzędzia i zasoby operacyjne zespołu.
          </p>
        </div>
      </div>
    </footer>
  );
}
