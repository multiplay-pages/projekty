export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-sm font-bold text-primary-foreground">P</span>
            </div>
            <span className="text-sm font-semibold text-foreground">Project Hub</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Project Hub — Centrum zasobów i narzędzi wewnętrznych.
          </p>
        </div>
      </div>
    </footer>
  );
}
