import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "gold" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-cream-200 text-brown-700",
  success: "bg-green-100 text-green-800",
  gold: "bg-gold-400 text-brown-900",
  outline: "bg-transparent border border-cream-300 text-brown-700",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

