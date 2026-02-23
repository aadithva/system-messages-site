interface CalloutProps {
  type: "note" | "tip" | "important" | "warning";
  title?: string;
  children: React.ReactNode;
}

const config = {
  note: {
    color: "var(--learn-callout-note)",
    bg: "#f0f6ff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 018 4zm0 8a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
    ),
    defaultTitle: "Note",
  },
  tip: {
    color: "var(--learn-callout-tip)",
    bg: "#f0fff0",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1.5a4.5 4.5 0 00-1.5 8.74V12a1 1 0 001 1h1a1 1 0 001-1v-1.76A4.5 4.5 0 008 1.5zM6.5 14a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
      </svg>
    ),
    defaultTitle: "Tip",
  },
  important: {
    color: "var(--learn-callout-important)",
    bg: "#fff5f0",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 018 4zm0 8a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
    ),
    defaultTitle: "Important",
  },
  warning: {
    color: "var(--learn-callout-warning)",
    bg: "#fffcf0",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8.56 1.69a.63.63 0 00-1.12 0L1.06 13.5a.63.63 0 00.56.88h12.76a.63.63 0 00.56-.88L8.56 1.69zM8 5.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 5.5zM8 12a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
    ),
    defaultTitle: "Warning",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const c = config[type];
  return (
    <div
      className="mb-6 rounded-sm overflow-hidden"
      style={{
        borderLeft: `4px solid ${c.color}`,
        backgroundColor: c.bg,
      }}
    >
      <div className="px-4 py-3">
        <div
          className="flex items-center gap-2 mb-1 text-sm font-semibold"
          style={{ color: c.color }}
        >
          {c.icon}
          {title || c.defaultTitle}
        </div>
        <div className="text-[13px] text-[var(--fluent-fg1)] leading-relaxed [&>p]:mb-1.5 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
