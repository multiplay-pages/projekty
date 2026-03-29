import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function FilterChip({ label, active, onClick, icon }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[12px] font-semibold transition-all duration-200",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-card border border-border text-foreground/70 hover:border-primary/30 hover:text-foreground"
      )}
    >
      {icon}
      {label}
    </button>
  );
}
