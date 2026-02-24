interface CategoryBadgeProps {
  category:
    | "confirmation"
    | "state-change"
    | "notice"
    | "feedback"
    | "not-system-message";
}

const config = {
  "confirmation": { label: "Confirmation", bg: "#e8ebfa", color: "#464FEB" },
  "state-change": { label: "State Change", bg: "#e1f5e4", color: "#107c10" },
  "notice": { label: "Notice", bg: "#f0f6ff", color: "#0078d4" },
  "feedback": { label: "Feedback", bg: "#fdf0e6", color: "#ca5010" },
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
