import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-sm text-ink-300 transition-colors duration-200 hover:border-accent-violet/50 hover:text-ink-100 hover:bg-accent-violet/10 ${className}`}
    >
      {children}
    </span>
  );
}
