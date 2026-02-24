import SpecTable from "@/components/SpecTable";
import Callout from "@/components/Callout";

export default function Overview() {
  return (
    <section id="overview">
      <h2>Overview</h2>

      {/* Definition block */}
      <div
        className="rounded-lg border border-[var(--learn-border)] overflow-hidden mb-8"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
      >
        <div className="px-6 py-5 bg-white">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fluent-fg4)] mb-3">
            Definition
          </div>
          <p className="text-[17px] leading-relaxed text-[var(--fluent-fg1)] mb-5">
            A <strong>system message</strong> is any message displayed within the
            chat surface that originates from the system — not from the user and
            not from Copilot. System messages sit outside the normal conversational
            flow and serve three distinct purposes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ScopeCard
              label="Confirmations"
              color="#464FEB"
              description="A user or system action that changed the state of the conversation has completed."
              examples="Saved as agent, stopped responding, regenerated with a different model"
            />
            <ScopeCard
              label="State changes"
              color="#107c10"
              description="A mode, session, or time period has started or ended, creating a structural break in the timeline."
              examples="Screen sharing ended, voice chat ended, date changed"
            />
            <ScopeCard
              label="Notices"
              color="#0078d4"
              description="A condition about ownership, permissions, visibility, or access — either conversation-wide or at a specific point in the timeline."
              examples="Someone shared this chat with you, this chat is read-only, messages beyond this point are only visible to you"
            />
          </div>
        </div>

        {/* 3 characteristics as cards */}
        <div className="border-t border-[var(--learn-border)] bg-[var(--fluent-bg4)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--learn-border)]">
            <CharacteristicCard
              title="Not conversational"
              description="Never has a Copilot avatar, never appears in a chat bubble, and never implies Copilot is speaking."
              icon={
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="var(--fluent-fg3)" strokeWidth="1.5">
                  <path d="M4 4h12v9H7l-3 3V4z" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="5" y1="5" x2="15" y2="15" stroke="var(--fluent-fg4)" strokeWidth="1.5" />
                </svg>
              }
            />
            <CharacteristicCard
              title="Inline in the chat timeline"
              description="Positioned relative to the messages around them, contextual to where they appear."
              icon={
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="var(--fluent-fg3)" strokeWidth="1.5">
                  <rect x="3" y="2" width="14" height="16" rx="2" strokeLinecap="round" />
                  <line x1="6" y1="6" x2="14" y2="6" />
                  <line x1="6" y1="10" x2="14" y2="10" strokeDasharray="2 2" stroke="var(--fluent-brand)" strokeWidth="2" />
                  <line x1="6" y1="14" x2="14" y2="14" />
                </svg>
              }
            />
            <CharacteristicCard
              title="Informational or structural"
              description="Confirms an action, marks a transition, establishes a boundary, or communicates a caveat."
              icon={
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="var(--fluent-fg3)" strokeWidth="1.5">
                  <circle cx="10" cy="10" r="7.5" />
                  <line x1="10" y1="9" x2="10" y2="14" strokeLinecap="round" />
                  <circle cx="10" cy="6.5" r="0.75" fill="var(--fluent-fg3)" stroke="none" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <Callout type="important">
        <p>
          System messages are <strong>never</strong> attributed to Copilot. They have
          no avatar, no &quot;Copilot&quot; label, and no conversational framing.
          They are from the system, presented as neutral facts.
        </p>
      </Callout>

      <h3>What is NOT a system message</h3>

      <p>
        Several patterns in the chat surface may look similar to system messages
        but serve different purposes and use different treatments.
      </p>

      <SpecTable
        columns={[
          { header: "Scenario", key: "scenario" },
          { header: "Correct Pattern", key: "pattern" },
          { header: "Why", key: "why" },
        ]}
        rows={[
          {
            scenario: "Copilot performing an action visible in the main canvas (e.g., generating a document, editing a slide)",
            pattern: <strong>Chat Output</strong>,
            why: "The action and its result are part of the conversational exchange. Copilot is responding to a user request.",
          },
          {
            scenario: "System-level errors (e.g., \"Copilot is unavailable,\" network failure)",
            pattern: <strong>Message Bar</strong>,
            why: "These are application-level states that affect the entire surface, not specific to a point in the chat timeline.",
          },
          {
            scenario: "UI state changes (e.g., suggestion chips collapsing, input field resizing)",
            pattern: <strong>UI Behavior</strong>,
            why: "These are visual state transitions of interactive components, not informational messages.",
          },
          {
            scenario: "Transient action feedback (e.g., \"Response copied,\" \"Feedback submitted\")",
            pattern: <strong>Toast</strong>,
            why: "These confirm micro-interactions that have no lasting impact on the conversation. The action doesn\u2019t change the state of the chat or system \u2014 it\u2019s momentary UI feedback that can safely disappear.",
          },
        ]}
      />
    </section>
  );
}

function ScopeCard({
  label,
  color,
  description,
  examples,
}: {
  label: string;
  color: string;
  description: string;
  examples: string;
}) {
  return (
    <div
      className="rounded-md border border-[var(--learn-border)] bg-[var(--fluent-bg4)] px-4 py-3"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <div className="text-[13px] font-semibold mb-1" style={{ color }}>
        {label}
      </div>
      <p className="text-[13px] leading-[19px] text-[var(--fluent-fg1)] m-0 mb-2">
        {description}
      </p>
      <p className="text-[12px] leading-[17px] text-[var(--fluent-fg4)] m-0 italic">
        e.g., {examples}
      </p>
    </div>
  );
}

function CharacteristicCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-6 h-6 rounded bg-white border border-[var(--learn-border)] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="text-[13px] font-semibold text-[var(--fluent-fg1)]">
          {title}
        </div>
      </div>
      <p className="text-[12px] leading-[17px] text-[var(--fluent-fg2)] m-0">
        {description}
      </p>
    </div>
  );
}
