import SpecTable from "@/components/SpecTable";
import CategoryBadge from "@/components/CategoryBadge";
import DecisionTree from "@/components/DecisionTree";
import Callout from "@/components/Callout";

export default function Classification() {
  return (
    <section id="classification">
      <h2>Classification Taxonomy</h2>

      <p>
        Every system message falls into exactly one of four categories:
      </p>

      <SpecTable
        columns={[
          { header: "Category", key: "category", width: "20%" },
          { header: "Purpose", key: "purpose", width: "25%" },
          { header: "Visual Type", key: "visual" },
          { header: "Trigger", key: "trigger" },
        ]}
        rows={[
          {
            category: <CategoryBadge category="action-acknowledgment" />,
            purpose: "Confirms that a user-initiated or system-performed action has completed",
            visual: "Inline Notice",
            trigger: "A discrete action finishes (save, stop, regenerate, switch)",
          },
          {
            category: <CategoryBadge category="session-lifecycle" />,
            purpose: "Marks the beginning or end of a mode, session, or temporal boundary",
            visual: "Divider",
            trigger: "A mode ends, a session closes, a date changes",
          },
          {
            category: <CategoryBadge category="context-boundary" />,
            purpose: "Establishes a change in who can see or interact with messages from this point forward",
            visual: "Boundary Marker",
            trigger: "Visibility or interaction rules change at a specific point in the timeline",
          },
          {
            category: <CategoryBadge category="access-notice" />,
            purpose: "Informs the user about chat ownership, permissions, or access caveats that apply to the entire conversation",
            visual: "Banner",
            trigger: "The user enters a chat with special access conditions",
          },
        ]}
      />

      <h3 id="action-acknowledgment">Action Acknowledgment</h3>
      <p>
        Communicates that something happened. The action is complete; the message is a receipt.
      </p>
      <ul>
        <li>Always appears at the point in the timeline where the action occurred</li>
        <li>Never requires user response</li>
        <li>May include an optional action link (e.g., &quot;Give feedback&quot;) but the link is supplementary, not primary</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;Saved as agent,&quot; &quot;Stopped responding,&quot; &quot;Regenerated with GPT-4&quot;
      </p>

      <h3 id="session-lifecycle">Session Lifecycle</h3>
      <p>
        Marks a structural break in the conversation timeline. The chat had a mode
        or session active, and it has now ended (or begun).
      </p>
      <ul>
        <li>Visually spans the full width of the chat surface</li>
        <li>Acts as a separator between what came before and what comes after</li>
        <li>May include a timestamp or session label</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;Screen sharing ended,&quot; &quot;Voice chat ended,&quot; &quot;February 23, 2026&quot;
      </p>

      <h3 id="context-boundary">Context Boundary</h3>
      <p>
        Tells the user that the rules of visibility or interaction have changed at
        this specific point. Messages above the boundary have different visibility
        than messages below.
      </p>
      <ul>
        <li>Always includes a directional reference (&quot;beyond this point,&quot; &quot;from here&quot;)</li>
        <li>Anchored to a specific location in the timeline</li>
        <li>Persistent — never dismissible, because the boundary condition is permanent</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;Messages beyond this point are only visible to you&quot;
      </p>

      <h3 id="access-notice">Access Notice</h3>
      <p>
        Communicates a condition that applies to the entire conversation, not a
        specific point in the timeline. Typically relates to who owns the chat, how
        it was shared, or what permissions apply.
      </p>
      <ul>
        <li>Appears at the top of the chat surface, above all messages</li>
        <li>May be dismissible if the information is non-critical after first read</li>
        <li>Applies globally, not to a specific message</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;Mona Kane shared this chat with you,&quot; &quot;This chat is read-only&quot;
      </p>

      <h3>Decision Tree</h3>
      <p>
        Use this flowchart to classify any new scenario:
      </p>

      <DecisionTree />

      <h3>Decision principles</h3>
      <Callout type="note" title="Classification Rules">
        <p>
          <strong>1. Mutual exclusivity.</strong> Every scenario maps to exactly
          one category. If a scenario seems to fit two, use the more specific one
          (Action Acknowledgment &gt; Session Lifecycle &gt; Context Boundary &gt; Access Notice).
        </p>
        <p>
          <strong>2. Timeline specificity.</strong> If the message is tied to a
          specific point in the chat timeline, it&apos;s not an Access Notice.
          Access Notices apply globally.
        </p>
        <p>
          <strong>3. Action vs. state.</strong> If something &quot;happened&quot;
          (verb, past tense), it&apos;s likely an Action Acknowledgment. If something
          &quot;is&quot; (state, present tense), it&apos;s likely a Context Boundary or
          Access Notice.
        </p>
      </Callout>
    </section>
  );
}
