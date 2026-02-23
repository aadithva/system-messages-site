interface CategoryBadgeProps {
  category:
    | "action-acknowledgment"
    | "session-lifecycle"
    | "context-boundary"
    | "access-notice"
    | "not-system-message";
}

const config = {
  "action-acknowledgment": { label: "Action Acknowledgment", bg: "#e8ebfa", color: "#464FEB" },
  "session-lifecycle": { label: "Session Lifecycle", bg: "#e1f5e4", color: "#107c10" },
  "context-boundary": { label: "Context Boundary", bg: "#fff0e0", color: "#d83b01" },
  "access-notice": { label: "Access Notice", bg: "#f0f6ff", color: "#0078d4" },
  "not-system-message": { label: "Not a System Message", bg: "#f3f2f1", color: "#707070" },
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const c = config[category];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: c.bg, color: c.color }}
    >
      {c.label}
    </span>
  );
}
