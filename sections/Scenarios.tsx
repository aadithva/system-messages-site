import ScenarioCard from "@/components/ScenarioCard";
import SpecTable from "@/components/SpecTable";

export default function Scenarios() {
  return (
    <section id="scenarios">
      <h2>Scenarios</h2>

      <p>
        This section maps every audited scenario (and anticipated future scenarios)
        to the framework. For each scenario, it identifies the correct category,
        visual type, and what changes are needed from the current implementation.
      </p>

      <h3 id="audited-scenarios">Audited Scenarios</h3>

      <p>
        These 7 scenarios have been observed and audited against the current Copilot implementation.
      </p>

      <ScenarioCard
        number={1}
        title="Save as Agent"
        scenario="User saves a Copilot response as a reusable agent. The system confirms the action."
        currentTreatment="Rendered as a Copilot chat response (with avatar and chat bubble)."
        problem={'This is not Copilot speaking — it\u2019s a system confirmation of an action. Rendering it as a Copilot response implies Copilot is "telling" the user what happened.'}
        category="confirmation"
        visualType="Inline Notice"
        recommendedTreatment={'Left-aligned inline notice with a checkmark icon. Text: Saved as [Agent Name]. Optional action link: "View agent" or "Undo". No avatar, no chat bubble, no Copilot attribution.'}
        changeLevel="Major"
      />

      <ScenarioCard
        number={2}
        title="Suggestions Bypassed"
        scenario="User types a new message instead of tapping a suggested response. The suggestion chips remain expanded."
        currentTreatment="Suggestions stay expanded with no visual change."
        problem={'Expanded suggestions clutter the timeline after they\u2019re no longer relevant. However, this is NOT a system message scenario — it\u2019s a UI state issue.'}
        category="not-system-message"
        visualType="N/A — UI State Collapse"
        recommendedTreatment={'Collapse bypassed suggestions to a compact state (e.g., "3 suggestions" label) or remove entirely. Use height transition animation (200ms, ease-out). Do not generate a system message.'}
        changeLevel="Major"
      />

      <ScenarioCard
        number={3}
        title="Screen Sharing / Voice Chat Ended"
        scenario="A screen sharing or voice chat session ends. The system marks the transition in the timeline."
        currentTreatment={'Centered divider with timestamp text (e.g., "Screen sharing ended \u00b7 2:34 PM").'}
        problem="The current implementation is reasonable but not formalized. No documented pattern, so variations may emerge across teams."
        category="state-change"
        visualType="Divider"
        recommendedTreatment="Full-width divider line with centered label. Text: Screen sharing ended or Voice chat ended. Optional timestamp. No icon required."
        changeLevel="Minimal"
      />

      <ScenarioCard
        number={4}
        title="Manually Stopped Copilot"
        scenario={'User clicks "Stop responding" while Copilot is generating. The system acknowledges the interruption.'}
        currentTreatment={'Inline message with a stop icon and "Give feedback" link.'}
        problem="Treatment is reasonable but inconsistent with other action acknowledgments."
        category="confirmation"
        visualType="Inline Notice"
        recommendedTreatment={'Left-aligned inline notice with stop-circle icon. Text: Stopped responding. Optional action link: "Give feedback". Follows the standard Inline Notice anatomy.'}
        changeLevel="Minor"
      />

      <ScenarioCard
        number={5}
        title="Regenerated with Different Model"
        scenario="User regenerates a response and the system switches to a different model. The system indicates which model was used."
        currentTreatment="Inline message with a sparkle/refresh icon and bold model name."
        problem="Similar to #4 but uses a different icon and slightly different styling. The two should be visually consistent."
        category="confirmation"
        visualType="Inline Notice"
        recommendedTreatment="Left-aligned inline notice with a refresh icon. Text: Regenerated with GPT-4. No action link needed. Follows the same Inline Notice spec as #4."
        changeLevel="Minor"
      />

      <ScenarioCard
        number={6}
        title="Shared Chat Received"
        scenario={"User opens a chat that was shared with them by another person. The system shows a notice about the chat\u2019s origin."}
        currentTreatment="Top banner with a warning-style background. Shows who shared the chat."
        problem="The pattern is effective but not formalized. No documented spec means other teams may implement access notices inconsistently."
        category="notice"
        visualType="Banner"
        recommendedTreatment="Full-width banner pinned to top. Info icon (not warning). Text: Mona Kane shared this chat with you. Optional dismiss button. Background: colorNeutralBackground4. Replace warning-level styling with informational."
        changeLevel="Minor"
      />

      <ScenarioCard
        number={7}
        title="Visibility Boundary"
        scenario="At a specific point in the chat, the visibility rules change (e.g., messages below are only visible to the current user)."
        currentTreatment="Left-aligned message with a lock icon."
        problem="The pattern is effective but not formalized. No documented spec for boundary markers."
        category="notice"
        visualType="Inline Notice"
        recommendedTreatment="Left-aligned lock icon with text: Messages beyond this point are only visible to you. Optional subtle divider line. Uses Caption 1 typography in colorNeutralForeground3."
        changeLevel="Minimal"
      />

      <h3>Summary of Changes</h3>

      <SpecTable
        columns={[
          { header: "#", key: "num", width: "5%" },
          { header: "Scenario", key: "scenario", width: "25%" },
          { header: "Change Level", key: "level", width: "15%" },
          { header: "Action", key: "action" },
        ]}
        rows={[
          {
            num: "1",
            scenario: "Save as Agent",
            level: <span className="text-[#c4314b] font-semibold">Major</span>,
            action: "Replace Copilot chat response with Inline Notice",
          },
          {
            num: "2",
            scenario: "Suggestions Bypassed",
            level: <span className="text-[#c4314b] font-semibold">Major</span>,
            action: "Implement UI collapse behavior (not a system message)",
          },
          {
            num: "3",
            scenario: "Screen/Voice Ended",
            level: <span className="text-[#107c10] font-semibold">Minor</span>,
            action: "Formalize existing Divider pattern",
          },
          {
            num: "4",
            scenario: "Stopped Copilot",
            level: <span className="text-[#107c10] font-semibold">Minor</span>,
            action: "Align with Inline Notice spec",
          },
          {
            num: "5",
            scenario: "Regenerated with Model",
            level: <span className="text-[#107c10] font-semibold">Minor</span>,
            action: "Align with Inline Notice spec",
          },
          {
            num: "6",
            scenario: "Shared Chat",
            level: <span className="text-[#107c10] font-semibold">Minor</span>,
            action: "Formalize Banner pattern; reconsider warning-level styling",
          },
          {
            num: "7",
            scenario: "Visibility Boundary",
            level: <span className="text-[#107c10] font-semibold">Minor</span>,
            action: "Formalize Inline Notice pattern (Notice)",
          },
        ]}
      />

      <h3 id="future-scenarios">Future Scenarios</h3>
      <p>
        The following scenarios have not been observed in the current audit but are
        anticipated. Each is pre-classified using the framework&apos;s decision tree.
      </p>

      <ScenarioCard
        number={8}
        title="Plugin / Extension Installed"
        scenario={"A plugin or extension is activated mid-conversation, expanding Copilot\u2019s capabilities."}
        category="confirmation"
        visualType="Inline Notice"
        recommendedTreatment="Puzzle-piece icon. Text: [Plugin Name] is now active."
        changeLevel="Minor"
        isFuture
      />

      <ScenarioCard
        number={9}
        title="Context Window Limit Reached"
        scenario="The conversation has exceeded the context window. Older messages are no longer available to Copilot."
        category="notice"
        visualType="Inline Notice"
        recommendedTreatment="Info-circle icon. Text: Earlier messages in this chat are no longer in context. Optional divider line."
        changeLevel="Minor"
        isFuture
      />

      <ScenarioCard
        number={10}
        title="File Upload Completed"
        scenario={"User uploads a file and the system confirms it\u2019s been processed."}
        category="confirmation"
        visualType="Inline Notice"
        recommendedTreatment="Attach icon. Text: quarterly-report.xlsx uploaded."
        changeLevel="Minor"
        isFuture
      />

      <ScenarioCard
        number={11}
        title="Conversation Transferred to Different Agent"
        scenario="The conversation is handed off from one Copilot agent to another."
        category="state-change"
        visualType="Divider"
        recommendedTreatment="Divider with label: Transferred to [Agent Name]."
        changeLevel="Minor"
        isFuture
      />

      <ScenarioCard
        number={12}
        title="Admin-Restricted Topic"
        scenario="An organization admin has restricted Copilot from responding to certain topics. User enters a chat where this applies."
        category="notice"
        visualType="Banner"
        recommendedTreatment={'Shield icon with warning background. Text: Your organization has restricted some topics in this chat. Optional "Learn more" link.'}
        changeLevel="Minor"
        isFuture
      />

      <ScenarioCard
        number={13}
        title="Chat Exported"
        scenario="User exports the chat to a file or external system."
        category="confirmation"
        visualType="Inline Notice"
        recommendedTreatment={'Download icon. Text: Chat exported. Optional action link: "Open file".'}
        changeLevel="Minor"
        isFuture
      />

      <ScenarioCard
        number={14}
        title="Date Boundary"
        scenario="Messages in the chat span multiple days. A date separator is shown."
        category="state-change"
        visualType="Divider"
        recommendedTreatment="Divider with centered date label: February 23, 2026. No icon."
        changeLevel="Minimal"
        isFuture
      />
    </section>
  );
}
