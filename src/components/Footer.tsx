export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card py-12">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-sm">
              <span className="text-sm font-bold text-primary-foreground">P</span>
            </div>
            <span className="text-[15px] font-bold text-foreground tracking-tight">Project Hub</span>
          </div>
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Project Hub — Zasoby operacyjne zespołu.
          </p>
        </div>
      </div>
    </footer>
  );
}
