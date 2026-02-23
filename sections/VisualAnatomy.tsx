import SpecTable from "@/components/SpecTable";
import LiveExample from "@/components/LiveExample";
import TokenBadge from "@/components/TokenBadge";
import Callout from "@/components/Callout";

export default function VisualAnatomy() {
  return (
    <section id="visual-anatomy">
      <h2>Visual Anatomy</h2>

      <p>
        Each of the four system message categories maps to a single visual type.
        Below are the component specifications, token references, and live rendered examples.
      </p>

      {/* Inline Notice */}
      <h3 id="inline-notice">Inline Notice <span className="text-sm font-normal text-[var(--fluent-fg4)]">— Action Acknowledgment</span></h3>
      <p>
        Used for action confirmations. Lightweight, non-interruptive.
      </p>

      <LiveExample type="inline-notice" label="Live Example" />

      <SpecTable
        columns={[
          { header: "Element", key: "element", width: "20%" },
          { header: "Required", key: "required", width: "15%" },
          { header: "Description", key: "description" },
        ]}
        rows={[
          {
            element: "Icon",
            required: "Yes",
            description: "16px icon indicating the action type. Positioned left of the text.",
          },
          {
            element: "Message text",
            required: "Yes",
            description: "Single sentence describing the completed action.",
          },
          {
            element: "Entity name",
            required: "Conditional",
            description: "Bold text for the specific entity involved (e.g., agent name, model name).",
          },
          {
            element: "Action link",
            required: "Optional",
            description: "Tertiary text link for supplementary actions (e.g., \"Give feedback\").",
          },
        ]}
      />

      <Callout type="tip" title="Token Reference">
        <p>
          Message text: <TokenBadge token="colorNeutralForeground2" value="#616161" /> Body 2 / regular
        </p>
        <p>
          Entity name: <TokenBadge token="colorNeutralForeground1" value="#242424" /> Body 2 / semibold
        </p>
        <p>
          Action link: <TokenBadge token="colorBrandForeground1" value="#464FEB" /> Body 2 / regular
        </p>
        <p>
          Icon: <TokenBadge token="colorNeutralForeground3" value="#616161" /> 16px
        </p>
        <p>
          Container: No background, no border, no card. Spacing: 8px compact, 12px standard.
        </p>
      </Callout>

      {/* Divider */}
      <h3 id="divider">Divider <span className="text-sm font-normal text-[var(--fluent-fg4)]">— Session Lifecycle</span></h3>
      <p>
        Used to mark structural breaks in the timeline. Visually separates &quot;before&quot; from &quot;after.&quot;
      </p>

      <LiveExample type="divider" label="Live Example" />

      <SpecTable
        columns={[
          { header: "Element", key: "element", width: "20%" },
          { header: "Required", key: "required", width: "15%" },
          { header: "Description", key: "description" },
        ]}
        rows={[
          {
            element: "Divider line",
            required: "Yes",
            description: "Full-width horizontal rule spanning the chat content area.",
          },
          {
            element: "Label text",
            required: "Optional",
            description: "Centered text sitting on top of the divider line (e.g., \"Screen sharing ended\").",
          },
          {
            element: "Timestamp",
            required: "Optional",
            description: "Time or date displayed alongside or replacing the label.",
          },
          {
            element: "Icon",
            required: "Optional",
            description: "16px icon to the left of the label for additional context.",
          },
        ]}
      />

      <Callout type="tip" title="Token Reference">
        <p>
          Label text: <TokenBadge token="colorNeutralForeground3" value="#616161" /> Caption 1 / regular (12px/16px)
        </p>
        <p>
          Line: 1px solid <TokenBadge token="colorNeutralStroke2" value="#e0e0e0" />
        </p>
        <p>
          Spacing: 16px above and below.
        </p>
      </Callout>

      {/* Boundary Marker */}
      <h3 id="boundary-marker">Boundary Marker <span className="text-sm font-normal text-[var(--fluent-fg4)]">— Context Boundary</span></h3>
      <p>
        Used to indicate a change in visibility or interaction rules at a specific
        point in the timeline.
      </p>

      <LiveExample type="boundary-marker" label="Live Example" />

      <SpecTable
        columns={[
          { header: "Element", key: "element", width: "20%" },
          { header: "Required", key: "required", width: "15%" },
          { header: "Description", key: "description" },
        ]}
        rows={[
          {
            element: "Icon",
            required: "Yes",
            description: "16px icon indicating the boundary type (e.g., lock icon for visibility).",
          },
          {
            element: "Message text",
            required: "Yes",
            description: "Single sentence describing the boundary condition.",
          },
          {
            element: "Divider line",
            required: "Optional",
            description: "A subtle horizontal line above or below the text to reinforce the boundary.",
          },
        ]}
      />

      <Callout type="tip" title="Token Reference">
        <p>
          Message text: <TokenBadge token="colorNeutralForeground3" value="#616161" /> Caption 1 / regular (12px/16px)
        </p>
        <p>
          Icon: <TokenBadge token="colorNeutralForeground3" value="#616161" /> 16px
        </p>
        <p>
          Container: No background. Whitespace + optional divider for separation. Spacing: 16px above and below.
        </p>
      </Callout>

      {/* Banner */}
      <h3 id="banner">Banner <span className="text-sm font-normal text-[var(--fluent-fg4)]">— Access Notice</span></h3>
      <p>
        Used to communicate conversation-wide conditions. Prominent, positioned at the top.
      </p>

      <LiveExample type="banner" label="Informational Banner" />
      <LiveExample type="banner-warning" label="Warning Banner" />

      <SpecTable
        columns={[
          { header: "Element", key: "element", width: "20%" },
          { header: "Required", key: "required", width: "15%" },
          { header: "Description", key: "description" },
        ]}
        rows={[
          {
            element: "Container",
            required: "Yes",
            description: "Full-width background fill spanning the chat surface.",
          },
          {
            element: "Icon",
            required: "Yes",
            description: "16px icon indicating the notice type (e.g., info, warning).",
          },
          {
            element: "Message text",
            required: "Yes",
            description: "Single sentence describing the access condition.",
          },
          {
            element: "Entity name",
            required: "Conditional",
            description: "Bold text for specific entities (e.g., person name, org name).",
          },
          {
            element: "Dismiss button",
            required: "Optional",
            description: "\"X\" button to dismiss the banner after reading.",
          },
          {
            element: "Action link",
            required: "Optional",
            description: "Link for further action (e.g., \"Learn more\").",
          },
        ]}
      />

      <Callout type="tip" title="Token Reference">
        <p>
          Info background: <TokenBadge token="colorNeutralBackground4" value="#f5f5f5" />
        </p>
        <p>
          Warning background: <TokenBadge token="colorPaletteYellowBackground1" value="#fff4ce" />
        </p>
        <p>
          Info icon: <TokenBadge token="colorNeutralForeground2" value="#616161" />
        </p>
        <p>
          Warning icon: <TokenBadge token="colorPaletteYellowForeground1" value="#835b00" />
        </p>
        <p>
          Text: <TokenBadge token="colorNeutralForeground1" value="#242424" /> Body 2 / regular. Entity: semibold.
        </p>
        <p>
          Layout: Pinned to top, full width, 12px internal padding, no border-radius.
        </p>
      </Callout>
    </section>
  );
}
