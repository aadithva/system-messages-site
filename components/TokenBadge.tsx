interface TokenBadgeProps {
  token: string;
  value?: string;
}

export default function TokenBadge({ token, value }: TokenBadgeProps) {
  return (
    <code
      className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded bg-[var(--fluent-bg4)] font-mono"
      style={{ color: "#c7254e", fontSize: "12px" }}
    >
      {value && (
        <span
          className="inline-block w-2.5 h-2.5 rounded-sm shrink-0 border border-black/10"
          style={{ backgroundColor: value }}
        />
      )}
      {token}
    </code>
  );
}
