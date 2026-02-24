import SpecTable from "@/components/SpecTable";
import CategoryBadge from "@/components/CategoryBadge";
import DecisionTree from "@/components/DecisionTree";
import Callout from "@/components/Callout";

export default function Classification() {
  return (
    <section id="classification">
      <h2>Classification Taxonomy</h2>

      <p>
        Every system message falls into exactly one of four categories. Each category
        maps to one or more visual types and answers a different question:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <TaxonomyCard
          category="confirmation"
          color="#464FEB"
          question="What just happened?"
          description="Something the user or system did has completed. The message is a receipt."
          visualType="Inline Notice"
          example={
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="#616161">
                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
              </svg>
              <span className="text-[13px] text-[var(--fluent-fg2)]">
                Saved as <strong className="text-[var(--fluent-fg1)]">Research Assistant</strong>
              </span>
            </div>
          }
        />
        <TaxonomyCard
          category="state-change"
          color="#107c10"
          question="What just started or ended?"
          description="A mode, session, or time period has transitioned. The divider separates before from after."
          visualType="Divider"
          example={
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-[var(--fluent-stroke2)]" />
              <span className="text-[11px] text-[var(--fluent-fg4)] px-1">Screen sharing ended</span>
              <div className="flex-1 h-px bg-[var(--fluent-stroke2)]" />
            </div>
          }
        />
        <TaxonomyCard
          category="notice"
          color="#0078d4"
          question="What should I know about visibility or access?"
          description="A condition about ownership, permissions, visibility, or access — either conversation-wide (Banner) or at a specific point (Inline Notice)."
          visualType="Banner / Inline Notice"
          example={
            <div className="flex items-center gap-2 bg-[var(--fluent-bg4)] rounded px-2.5 py-1.5 -mx-1">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="#616161">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 018 4zm0 8a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              </svg>
              <span className="text-[12px] text-[var(--fluent-fg1)]">
                <strong>Mona Kane</strong> shared this chat with you
              </span>
            </div>
          }
        />
        <TaxonomyCard
          category="feedback"
          color="#ca5010"
          question="How was this experience?"
          description="The system solicits user input about an experience, feature, or interaction quality. Unlike other categories, feedback messages are interactive."
          visualType="Feedback Card"
          example={
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="#616161">
                <path d="M8 1.5l1.85 3.75L14 5.88l-3 2.93.7 4.12L8 10.88l-3.7 2.05.7-4.12-3-2.93 4.15-.63L8 1.5z" />
              </svg>
              <span className="text-[13px] text-[var(--fluent-fg2)]">
                How is Copilot performing?
              </span>
              <div className="flex gap-0.5 ml-1">
                {[1,2,3,4,5].map((n) => (
                  <span key={n} className="w-5 h-5 rounded border border-[var(--fluent-stroke2)] bg-white text-[10px] flex items-center justify-center text-[var(--fluent-fg4)]">{n}</span>
                ))}
              </div>
            </div>
          }
        />
      </div>

      <h3 id="confirmation">Confirmation</h3>
      <p>
        Communicates that something happened. The action is complete; the message is a receipt.
        Specifically, Confirmations are for <strong>state-changing actions</strong> — actions
        that alter the conversation, create something new, or change how the system behaves.
      </p>
      <ul>
        <li>Always appears at the point in the timeline where the action occurred</li>
        <li>Never requires user response</li>
        <li>May include an optional action link (e.g., &quot;Give feedback&quot;) but the link is supplementary, not primary</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;Saved as agent,&quot; &quot;Stopped responding,&quot; &quot;Regenerated with GPT-4&quot;
      </p>

      <h4>What qualifies as an Confirmation?</h4>
      <p>
        The test is <strong>timeline significance</strong>: if you returned to this conversation
        tomorrow, would you need to know this action happened?
      </p>

      <SpecTable
        columns={[
          { header: "Action", key: "action", width: "30%" },
          { header: "Timeline impact?", key: "impact", width: "25%" },
          { header: "Pattern", key: "pattern" },
        ]}
        rows={[
          {
            action: "Save as agent",
            impact: <strong className="text-[#107c10]">Yes</strong>,
            pattern: <><strong>Confirmation</strong> — a new entity was created</>,
          },
          {
            action: "Stop responding",
            impact: <strong className="text-[#107c10]">Yes</strong>,
            pattern: <><strong>Confirmation</strong> — the conversation flow was altered</>,
          },
          {
            action: "Regenerate with GPT-4",
            impact: <strong className="text-[#107c10]">Yes</strong>,
            pattern: <><strong>Confirmation</strong> — the response below uses a different model</>,
          },
          {
            action: "Copy response",
            impact: <span className="text-[var(--fluent-fg4)]">No</span>,
            pattern: <><strong>Toast</strong> — clipboard is transient, nothing in the chat changed</>,
          },
          {
            action: "Share response",
            impact: <span className="text-[var(--fluent-fg4)]">No</span>,
            pattern: <><strong>Toast</strong> — sharing happens outside the chat</>,
          },
          {
            action: "Thumbs up / down",
            impact: <span className="text-[var(--fluent-fg4)]">No</span>,
            pattern: <><strong>Toast</strong> — feedback is captured elsewhere</>,
          },
        ]}
      />

      <Callout type="note" title="Confirmation vs. Toast">
        <p>
          Both confirm a completed action, but they differ in <strong>scope</strong>.
          Confirmations confirm <strong>system/operational actions</strong> that
          change state (save, stop, regenerate, export). Toasts confirm <strong>transient
          micro-interactions</strong> with no lasting impact (copy, share, like). Toasts
          live outside the timeline as ephemeral overlays. Confirmations live
          inside the timeline as permanent records.
        </p>
      </Callout>

      <h4>Confirmation vs. Chat Output</h4>
      <p>
        Not every action in the chat is a system message. If Copilot is <strong>performing
        work and showing you the result</strong> as part of conversation, that&apos;s a Chat
        Output — not a system message.
      </p>

      <SpecTable
        columns={[
          { header: "System message (Confirmation)", key: "system" },
          { header: "NOT a system message (Chat Output)", key: "chat" },
        ]}
        rows={[
          {
            system: <>Saved as <strong>Research Assistant</strong></>,
            chat: <>&quot;Here&apos;s your research summary...&quot;</>,
          },
          {
            system: "Stopped responding",
            chat: "Copilot generating a document",
          },
          {
            system: <>Regenerated with <strong>GPT-4</strong></>,
            chat: "Copilot editing a slide",
          },
        ]}
      />

      <h3 id="state-change">State Change</h3>
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

      <h3 id="notice">Notice</h3>
      <p>
        Communicates a condition about ownership, permissions, visibility, or access.
        Notices come in two forms depending on scope:
      </p>
      <ul>
        <li><strong>Conversation-wide</strong> (Banner): Applies to the entire conversation. Appears at the top of the chat surface, above all messages. May be dismissible if non-critical after first read.</li>
        <li><strong>Point-specific</strong> (Inline Notice): Marks a specific point in the timeline where visibility or interaction rules change. Always includes a directional reference (&quot;beyond this point,&quot; &quot;from here&quot;). Persistent — never dismissible, because the boundary condition is permanent.</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;Mona Kane shared this chat with you,&quot; &quot;This chat is read-only,&quot; &quot;Messages beyond this point are only visible to you&quot;
      </p>

      <h3 id="feedback">Feedback</h3>
      <p>
        Solicits user input about an experience, feature, or interaction quality.
        Unlike the other three categories which are purely informational, feedback
        messages are <strong>interactive</strong> — they expect a response.
      </p>
      <ul>
        <li>Triggered by the system at determined intervals — not tied to a specific user action</li>
        <li>May appear after specific interaction types (e.g., after a voice agent session)</li>
        <li>Always dismissible — the user can skip or ignore the prompt</li>
        <li>Collapses to a confirmation after submission (e.g., &quot;Thanks for your feedback&quot;)</li>
      </ul>
      <p className="text-[var(--fluent-fg2)] text-[13px] italic">
        Examples: &quot;How is Copilot performing?&quot; (1–5 scale), &quot;Rate this voice session&quot;
      </p>

      <Callout type="note" title="Feedback vs. Toast">
        <p>
          Thumbs up/down on individual responses is a <strong>Toast</strong> — it&apos;s a
          transient micro-interaction confirming the feedback was captured. A Feedback
          message is different: it&apos;s a <strong>system-initiated prompt</strong> that
          asks the user to evaluate a broader experience, not a single response.
        </p>
      </Callout>

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
          (Confirmation &gt; State Change &gt; Notice &gt; Feedback).
        </p>
        <p>
          <strong>2. Timeline specificity.</strong> If the message is tied to a
          specific point in the chat timeline, it&apos;s not an Notice.
          Notices apply globally.
        </p>
        <p>
          <strong>3. Action vs. state.</strong> If something &quot;happened&quot;
          (verb, past tense), it&apos;s likely an Confirmation. If something
          &quot;is&quot; (state, present tense), it&apos;s likely an Notice.
        </p>
      </Callout>
    </section>
  );
}

function TaxonomyCard({
  category,
  color,
  question,
  description,
  visualType,
  example,
}: {
  category: "confirmation" | "state-change" | "notice" | "feedback";
  color: string;
  question: string;
  description: string;
  visualType: string;
  example: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg border border-[var(--learn-border)] overflow-hidden"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
    >
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `2px solid ${color}` }}>
        <CategoryBadge category={category} />
        <span className="text-[11px] font-medium text-[var(--fluent-fg4)] bg-[var(--fluent-bg4)] px-2 py-0.5 rounded">
          {visualType}
        </span>
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        <p className="text-[14px] font-semibold text-[var(--fluent-fg1)] m-0 mb-1">
          {question}
        </p>
        <p className="text-[13px] leading-[19px] text-[var(--fluent-fg2)] m-0 mb-3">
          {description}
        </p>

        {/* Live mini example */}
        <div className="rounded-md border border-dashed border-[var(--learn-border)] bg-[#fafafa] px-3 py-2.5">
          {example}
        </div>
      </div>
    </div>
  );
}
