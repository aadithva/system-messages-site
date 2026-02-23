import SpecTable from "@/components/SpecTable";
import Callout from "@/components/Callout";

export default function Overview() {
  return (
    <section id="overview">
      <h2>Overview</h2>

      <p>
        A <strong>system message</strong> is any message displayed within the chat surface
        that originates from the system — not from the user and not from Copilot.
        System messages communicate state changes, confirmations, boundaries, and
        notices that sit outside the normal conversational flow between a user and Copilot.
      </p>

      <h3>Key characteristics</h3>
      <ul>
        <li>
          <strong>Not conversational.</strong> System messages are not part of the
          user-Copilot dialogue. They never have a Copilot avatar, never appear in
          a chat bubble, and never imply Copilot is &quot;speaking.&quot;
        </li>
        <li>
          <strong>Contextual to the chat surface.</strong> They appear inline within
          the chat timeline, positioned relative to the messages around them.
        </li>
        <li>
          <strong>Informational or structural.</strong> They either confirm something
          that happened, mark a transition, establish a boundary, or communicate a
          caveat about the current context.
        </li>
      </ul>

      <h3>What is NOT a system message</h3>

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
        ]}
      />

      <Callout type="important">
        <p>
          System messages are <strong>never</strong> attributed to Copilot. They have
          no avatar, no &quot;Copilot&quot; label, and no conversational framing.
          They are from the system, presented as neutral facts.
        </p>
      </Callout>
    </section>
  );
}
