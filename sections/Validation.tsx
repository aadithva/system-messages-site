import SpecTable from "@/components/SpecTable";
import CategoryBadge from "@/components/CategoryBadge";
import Callout from "@/components/Callout";

export default function Validation() {
  return (
    <section id="validation">
      <h2>Validation</h2>

      <p>
        The framework was validated against all 16 scenarios (7 audited + 9 future)
        to ensure consistency, completeness, and mutual exclusivity.
      </p>

      <h3>Mutual exclusivity check</h3>
      <p>
        Every scenario maps to exactly one category. No scenario was ambiguous between
        two categories.
      </p>

      <SpecTable
        columns={[
          { header: "Category", key: "category", width: "30%" },
          { header: "Scenarios", key: "scenarios" },
        ]}
        rows={[
          {
            category: <CategoryBadge category="confirmation" />,
            scenarios: "#1 Save as Agent, #4 Stopped Copilot, #5 Regenerated, Plugin Installed, File Upload, Chat Exported",
          },
          {
            category: <CategoryBadge category="state-change" />,
            scenarios: "#3 Screen/Voice Ended, Conversation Transferred, Date Boundary",
          },
          {
            category: <CategoryBadge category="notice" />,
            scenarios: "#6 Shared Chat, #7 Visibility Boundary, Admin-Restricted Topic, Context Window Limit",
          },
          {
            category: <CategoryBadge category="feedback" />,
            scenarios: "System-Initiated Feedback Prompt, Post-Session Feedback",
          },
          {
            category: <CategoryBadge category="not-system-message" />,
            scenarios: "#2 Suggestions Bypassed (UI State Collapse)",
          },
        ]}
      />

      <h3>Decision tree consistency</h3>
      <Callout type="tip">
        <p>
          Each scenario was run through the decision tree and produced the same result
          as the manual classification. No conflicts or ambiguities were found.
        </p>
      </Callout>

      <h3>Visual type purity</h3>
      <p>
        No visual type is used for contradictory purposes:
      </p>
      <ul>
        <li><strong>Inline Notice</strong> — always confirms a completed action</li>
        <li><strong>Divider</strong> — always marks a structural break</li>
        <li><strong>Banner</strong> — always communicates conversation-wide access conditions</li>
        <li><strong>Inline Notice</strong> — always establishes a point-specific visibility/interaction change</li>
        <li><strong>Feedback Card</strong> — always solicits user input about an experience</li>
      </ul>
      <Callout type="note" title="Notice: two visual expressions">
        <p>
          Notice is the only category with two visual types. Banner handles conversation-wide
          conditions (pinned to top), while Inline Notice handles point-specific visibility changes
          (in the timeline). Both communicate access/visibility information — the scope determines
          which visual expression is used.
        </p>
      </Callout>

      <Callout type="note" title="Feedback Card: the only interactive system message">
        <p>
          Feedback Card is the only visual type that expects user input. All other system
          messages are informational — they tell the user something. Feedback Cards ask the
          user something. This makes them uniquely dismissible and collapsible after interaction.
        </p>
      </Callout>

      <h3>Coverage metrics</h3>

      <SpecTable
        columns={[
          { header: "Check", key: "check", width: "35%" },
          { header: "Result", key: "result" },
        ]}
        rows={[
          {
            check: "Mutual exclusivity",
            result: <span className="text-[#107c10] font-semibold">Every scenario maps to exactly one category</span>,
          },
          {
            check: "Decision tree consistency",
            result: <span className="text-[#107c10] font-semibold">All scenarios produce same result via tree and manual classification</span>,
          },
          {
            check: "Visual type purity",
            result: <span className="text-[#107c10] font-semibold">Each type serves one purpose; Notice uses two visual expressions (Banner + Inline Notice)</span>,
          },
          {
            check: "Coverage",
            result: <span className="text-[#107c10] font-semibold">16/16 scenarios classified across 4 categories</span>,
          },
        ]}
      />
    </section>
  );
}
