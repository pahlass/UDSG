export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      {children}
    </div>
  );
}
