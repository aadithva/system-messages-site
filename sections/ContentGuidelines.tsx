import SpecTable from "@/components/SpecTable";
import Callout from "@/components/Callout";

export default function ContentGuidelines() {
  return (
    <section id="content-guidelines">
      <h2>Content Guidelines</h2>

      <h3>Tense</h3>

      <SpecTable
        columns={[
          { header: "Situation", key: "situation", width: "30%" },
          { header: "Tense", key: "tense", width: "15%" },
          { header: "Example", key: "example" },
        ]}
        rows={[
          {
            situation: "An action just completed",
            tense: "Past tense",
            example: <>&quot;Saved as <strong>My Agent</strong>&quot;</>,
          },
          {
            situation: "A session or mode ended",
            tense: "Past tense",
            example: <>&quot;Screen sharing ended&quot;</>,
          },
          {
            situation: "An ongoing condition or state",
            tense: "Present tense",
            example: <>&quot;Messages beyond this point are only visible to you&quot;</>,
          },
          {
            situation: "Ownership or access info",
            tense: <>Past tense for the action, present&nbsp;for&nbsp;the&nbsp;state</>,
            example: <>&quot;<strong>Mona Kane</strong> shared this chat with you&quot;</>,
          },
        ]}
      />

      <h3>Brevity</h3>
      <ul>
        <li>
          <strong>One sentence maximum.</strong> No periods at the end unless the
          sentence is structurally complex enough to require one.
        </li>
        <li>
          Prefer fragments over full sentences when the meaning is clear:{" "}
          <code>Saved as <strong>My Agent</strong></code> not &quot;Your response
          has been saved as an agent called My Agent.&quot;
        </li>
        <li>
          Never include redundant phrasing like &quot;Please note that&quot; or
          &quot;This is to inform you that.&quot;
        </li>
      </ul>

      <h3>Bold formatting</h3>
      <p>Bold the specific entity name when one is present:</p>
      <ul>
        <li>&quot;Saved as <strong>Research Assistant</strong>&quot;</li>
        <li>&quot;Regenerated with <strong>GPT-4</strong>&quot;</li>
        <li>&quot;<strong>Mona Kane</strong> shared this chat with you&quot;</li>
      </ul>

      <Callout type="note">
        <p>
          Do not bold generic descriptions. &quot;Stopped responding&quot; has no
          entity name to bold. &quot;Screen sharing ended&quot; has no entity name
          to bold.
        </p>
      </Callout>

      <h3>Action links</h3>
      <ul>
        <li>Use action links sparingly — only when there&apos;s a meaningful follow-up action the user might want to take.</li>
        <li>Phrase as verbs: &quot;Give feedback,&quot; &quot;Learn more,&quot; &quot;Undo&quot;</li>
        <li>Action links are always tertiary-styled text links, never buttons.</li>
      </ul>

      <h3>Attribution</h3>
      <Callout type="important">
        <p>
          System messages are <strong>never</strong> attributed to Copilot. They
          have no avatar, no &quot;Copilot&quot; label, and no conversational framing.
          They are from the system, presented as neutral facts.
        </p>
      </Callout>

      <h3>Quick reference</h3>

      <SpecTable
        columns={[
          { header: "Rule", key: "rule", width: "20%" },
          { header: "Guideline", key: "guideline" },
        ]}
        rows={[
          {
            rule: <strong>Length</strong>,
            guideline: "One sentence max. Prefer fragments when clear.",
          },
          {
            rule: <strong>Tense</strong>,
            guideline: "Past for completed actions (\"Saved as...\"). Present for ongoing states (\"Messages beyond this point...\").",
          },
          {
            rule: <strong>Bold</strong>,
            guideline: <>Bold the entity name: <code>Saved as <strong>Research Assistant</strong></code>. Don&apos;t bold generic descriptions.</>,
          },
          {
            rule: <strong>Links</strong>,
            guideline: "Verb-phrased, sparingly used: \"Give feedback,\" \"Undo,\" \"Learn more\"",
          },
          {
            rule: <strong>Attribution</strong>,
            guideline: "Never from Copilot. No avatar, no label, no chat bubble.",
          },
          {
            rule: <strong>Periods</strong>,
            guideline: "No period unless the sentence is structurally complex.",
          },
        ]}
      />
    </section>
  );
}
