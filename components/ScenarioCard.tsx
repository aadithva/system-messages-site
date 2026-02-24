import CategoryBadge from "./CategoryBadge";

interface ScenarioCardProps {
  number: number;
  title: string;
  scenario: string;
  currentTreatment?: string;
  problem?: string;
  category: "confirmation" | "state-change" | "notice" | "feedback" | "not-system-message";
  visualType: string;
  recommendedTreatment: string;
  changeLevel: "Major" | "Minor" | "Minimal";
  isFuture?: boolean;
}

const changeLevelColors = {
  Major: { bg: "#fde7e9", color: "#c4314b" },
  Minor: { bg: "#fff0e0", color: "#d83b01" },
  Minimal: { bg: "#e1f5e4", color: "#107c10" },
};

export default function ScenarioCard({
  number,
  title,
  scenario,
  currentTreatment,
  problem,
  category,
  visualType,
  recommendedTreatment,
  changeLevel,
  isFuture,
}: ScenarioCardProps) {
  const cl = changeLevelColors[changeLevel];

  return (
    <div className="mb-5 rounded-lg border border-[var(--learn-border)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-[var(--fluent-bg4)] border-b border-[var(--learn-border)]">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[var(--fluent-fg1)]">
            {isFuture ? "" : `#${number} `}{title}
          </span>
          <CategoryBadge category={category} />
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={{ backgroundColor: cl.bg, color: cl.color }}
        >
          {changeLevel}
        </span>
      </div>
      <div className="px-5 py-4 space-y-3 text-[13px]">
        <div>
          <span className="font-semibold text-[var(--fluent-fg1)]">Scenario: </span>
          <span className="text-[var(--fluent-fg2)]">{scenario}</span>
        </div>
        {currentTreatment && (
          <div>
            <span className="font-semibold text-[var(--fluent-fg1)]">Current: </span>
            <span className="text-[var(--fluent-fg2)]">{currentTreatment}</span>
          </div>
        )}
        {problem && (
          <div>
            <span className="font-semibold text-[var(--fluent-fg1)]">Problem: </span>
            <span className="text-[var(--fluent-fg2)]">{problem}</span>
          </div>
        )}
        <div className="flex items-start gap-2">
          <span className="font-semibold text-[var(--fluent-fg1)] shrink-0">Visual type: </span>
          <span className="text-[var(--fluent-fg2)]">{visualType}</span>
        </div>
        <div className="pt-2 border-t border-[var(--learn-border)]">
          <span className="font-semibold text-[var(--fluent-fg1)]">Recommended: </span>
          <span className="text-[var(--fluent-fg2)]">{recommendedTreatment}</span>
        </div>
      </div>
    </div>
  );
}
