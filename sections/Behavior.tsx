import SpecTable from "@/components/SpecTable";
import Callout from "@/components/Callout";

export default function Behavior() {
  return (
    <section id="behavior">
      <h2>Behavior</h2>

      <h3>Persistence</h3>

      <SpecTable
        columns={[
          { header: "Visual Type", key: "type", width: "20%" },
          { header: "Persistence", key: "persistence", width: "20%" },
          { header: "Rationale", key: "rationale" },
        ]}
        rows={[
          {
            type: <strong>Inline Notice</strong>,
            persistence: "Permanent",
            rationale: "Part of the timeline history. Removing it would create a gap in the record of what happened.",
          },
          {
            type: <strong>Divider</strong>,
            persistence: "Permanent",
            rationale: "Structural marker. The session boundary is a fact; it doesn't expire.",
          },
          {
            type: <strong>Boundary Marker</strong>,
            persistence: "Permanent",
            rationale: "The boundary condition is ongoing. Removing it would obscure the visibility change.",
          },
          {
            type: <strong>Banner</strong>,
            persistence: "Dismissible (optional)",
            rationale: "The access condition persists, but the user may not need the reminder after first read. If dismissed, it should be accessible via a \"chat info\" affordance.",
          },
        ]}
      />

      <h3>Timing</h3>
      <ul>
        <li><strong>Action Acknowledgment:</strong> Appears immediately after the action completes, at the point in the timeline where the action occurred.</li>
        <li><strong>Session Lifecycle:</strong> Appears immediately when the session or mode ends (or begins).</li>
        <li><strong>Context Boundary:</strong> Appears at the exact point in the timeline where the boundary takes effect.</li>
        <li><strong>Access Notice:</strong> Appears when the chat is opened, before any messages are scrolled into view.</li>
      </ul>

      <h3>Scroll behavior</h3>

      <SpecTable
        columns={[
          { header: "Visual Type", key: "type", width: "25%" },
          { header: "Behavior", key: "behavior" },
        ]}
        rows={[
          {
            type: <strong>Inline Notice, Divider, Boundary Marker</strong>,
            behavior: "Scroll with the chat content. They are part of the timeline.",
          },
          {
            type: <strong>Banner</strong>,
            behavior: "Pinned to the top of the chat surface. Does not scroll. Remains visible regardless of scroll position (until dismissed).",
          },
        ]}
      />

      <h3>Interaction</h3>
      <ul>
        <li>System messages are not interactive by default. They do not have hover states, focus states, or click targets (except for optional action links and dismiss buttons).</li>
        <li>Action links follow standard link interaction patterns (hover underline, focus ring).</li>
        <li>System messages are not selectable as text (they are UI elements, not content).</li>
      </ul>

      <h3>Animation</h3>
      <ul>
        <li>System messages appear without animation. They are inserted into the timeline or pinned to the top as part of a state change.</li>
        <li>Dismissing a banner uses a standard fade-out (200ms, ease-out).</li>
      </ul>

      <h3>Behavior summary</h3>

      <SpecTable
        columns={[
          { header: "Visual Type", key: "type", width: "22%" },
          { header: "Persists?", key: "persists", width: "18%" },
          { header: "Scrolls?", key: "scrolls", width: "20%" },
          { header: "Animated?", key: "animated" },
        ]}
        rows={[
          {
            type: "Inline Notice",
            persists: "Permanent",
            scrolls: "Yes (in timeline)",
            animated: "No",
          },
          {
            type: "Divider",
            persists: "Permanent",
            scrolls: "Yes (in timeline)",
            animated: "No",
          },
          {
            type: "Boundary Marker",
            persists: "Permanent",
            scrolls: "Yes (in timeline)",
            animated: "No",
          },
          {
            type: "Banner",
            persists: "Dismissible",
            scrolls: "No (pinned to top)",
            animated: "Fade-out on dismiss (200ms ease-out)",
          },
        ]}
      />

      <h3>Related pattern: UI State Collapse</h3>
      <Callout type="warning" title="Not a system message">
        <p>
          When the user bypasses an interactive suggestion (e.g., types a new message
          instead of tapping a suggestion chip), the suggestion UI should collapse to
          avoid cluttering the timeline. This is a <strong>UI behavior</strong>, not
          a system message.
        </p>
        <p>
          The collapsed state shows a brief label (e.g., &quot;3 suggestions&quot;) or
          collapses entirely. No system message is generated — the collapse is a UI
          behavior, not an informational event.
        </p>
      </Callout>
    </section>
  );
}
