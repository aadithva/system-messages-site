import SpecTable from "@/components/SpecTable";
import CategoryBadge from "@/components/CategoryBadge";
import Callout from "@/components/Callout";

export default function Validation() {
  return (
    <section id="validation">
      <h2>Validation</h2>

      <p>
        The framework was validated against all 14 scenarios (7 audited + 7 future)
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
            category: <CategoryBadge category="action-acknowledgment" />,
            scenarios: "#1 Save as Agent, #4 Stopped Copilot, #5 Regenerated, Plugin Installed, File Upload, Chat Exported",
          },
          {
            category: <CategoryBadge category="session-lifecycle" />,
            scenarios: "#3 Screen/Voice Ended, Conversation Transferred, Date Boundary",
          },
          {
            category: <CategoryBadge category="context-boundary" />,
            scenarios: "#7 Visibility Boundary, Context Window Limit",
          },
          {
            category: <CategoryBadge category="access-notice" />,
            scenarios: "#6 Shared Chat, Admin-Restricted Topic",
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
        <li><strong>Boundary Marker</strong> — always establishes a visibility/interaction change</li>
        <li><strong>Banner</strong> — always communicates conversation-wide access conditions</li>
      </ul>

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
            result: <span className="text-[#107c10] font-semibold">Each type serves one purpose only</span>,
          },
          {
            check: "Coverage",
            result: <span className="text-[#107c10] font-semibold">14/14 scenarios classified without needing new categories</span>,
          },
        ]}
      />
    </section>
  );
}
