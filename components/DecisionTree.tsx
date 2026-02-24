export default function DecisionTree() {
  const steps = [
    {
      question: "Is it a system-level error or outage?",
      yes: "Use Message Bar",
      yesNote: "not a system message",
      highlight: false,
    },
    {
      question: "Is Copilot performing an action and showing the result?",
      yes: "Use Chat Output",
      yesNote: "not a system message",
      highlight: false,
    },
    {
      question: "Is it a UI component changing state (no new information)?",
      yes: "Use UI Behavior pattern",
      yesNote: "not a system message",
      highlight: false,
    },
    {
      question: "Does it confirm that a discrete action completed?",
      yes: "Confirmation",
      yesType: "Inline Notice",
      highlight: true,
      color: "#464FEB",
    },
    {
      question: "Does it mark the start or end of a session, mode, or time period?",
      yes: "State Change",
      yesType: "Divider",
      highlight: true,
      color: "#107c10",
    },
    {
      question: "Does it communicate ownership, permissions, visibility changes, or access conditions?",
      yes: "Notice",
      yesType: "Banner or Inline Notice",
      highlight: true,
      color: "#0078d4",
    },
    {
      question: "Does it solicit user feedback about an experience or interaction?",
      yes: "Feedback",
      yesType: "Feedback Card",
      highlight: true,
      color: "#ca5010",
    },
  ];

  return (
    <div className="mb-6 rounded-lg border border-[var(--learn-border)] overflow-hidden bg-white">
      <div className="px-5 py-3 bg-[var(--fluent-bg4)] border-b border-[var(--learn-border)]">
        <span className="text-sm font-semibold text-[var(--fluent-fg1)]">
          Decision Tree
        </span>
      </div>
      <div className="p-5">
        <div className="text-[13px] font-semibold text-[var(--fluent-fg1)] mb-4 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[var(--fluent-fg1)] text-white flex items-center justify-center text-[10px]">
            ?
          </span>
          A new scenario needs a message in the chat surface
        </div>
        <div className="space-y-1 ml-2">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{
                    backgroundColor: step.highlight
                      ? step.color
                      : "var(--fluent-fg4)",
                  }}
                />
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--learn-border)]" />
                )}
              </div>
              <div className="pb-4 flex-1 min-w-0">
                <div className="text-[13px] text-[var(--fluent-fg1)] leading-relaxed">
                  {step.question}
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[11px] font-semibold text-white bg-[var(--fluent-fg4)] rounded px-1.5 py-0.5">
                    YES
                  </span>
                  <span
                    className="text-[13px] font-semibold"
                    style={{
                      color: step.highlight
                        ? step.color
                        : "var(--fluent-fg2)",
                    }}
                  >
                    {step.yes}
                  </span>
                  {step.yesType && (
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: `${step.color}15`,
                        color: step.color,
                      }}
                    >
                      {step.yesType}
                    </span>
                  )}
                  {step.yesNote && (
                    <span className="text-[11px] text-[var(--fluent-fg4)] italic">
                      ({step.yesNote})
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-2 mt-1 flex items-center gap-2 pl-5 text-[13px] text-[var(--fluent-fg4)] italic">
          None of the above? Revisit the scenario.
        </div>
      </div>
    </div>
  );
}
