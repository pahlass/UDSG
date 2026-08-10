export function SectionLabel({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] ${
        isDark ? "text-paper/50" : "text-muted"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-paper" : "bg-ink"}`} />
      {children}
    </div>
  );
}
