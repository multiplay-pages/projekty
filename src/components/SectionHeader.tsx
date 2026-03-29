interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false, accent = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {accent && <div className="mb-3 h-1 w-10 rounded-full bg-gradient-primary" style={centered ? { margin: "0 auto 0.75rem" } : undefined} />}
      <h2 className="section-heading mb-2">{title}</h2>
      {subtitle && (
        <p className={`section-subheading ${centered ? "mx-auto max-w-md" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
