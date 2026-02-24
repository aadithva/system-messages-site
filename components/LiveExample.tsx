interface LiveExampleProps {
  type: "inline-notice" | "divider" | "inline-marker" | "banner" | "banner-warning" | "feedback-card";
  label?: string;
}

export default function LiveExample({ type, label }: LiveExampleProps) {
  return (
    <div className="mb-6">
      {label && (
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fluent-fg4)] mb-2">
          {label}
        </div>
      )}
      <div
        className="rounded-lg border border-[var(--learn-border)] bg-white overflow-hidden"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
      >
        {/* Banner system messages render above the chat */}
        {(type === "banner" || type === "banner-warning") && (
          <div className="px-6 py-3 border-b border-dashed border-[var(--learn-border)] bg-[#fafafa]">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--fluent-fg4)] mb-2">
              System Message
            </div>
            {type === "banner" && <BannerExample variant="info" />}
            {type === "banner-warning" && <BannerExample variant="warning" />}
          </div>
        )}

        {/* Mock chat context */}
        <div className="px-6 pt-5 pb-2">
          <ChatBubble side="right" text="Save this as an agent called Research Assistant" />
          <ChatBubble
            side="left"
            text="I've set up Research Assistant for you. It can help with academic papers, literature reviews, and citation management."
            isAssistant
          />
        </div>

        {/* Non-banner system messages render below the chat */}
        {type !== "banner" && type !== "banner-warning" && (
          <div className="px-6 py-3 border-t border-dashed border-[var(--learn-border)] bg-[#fafafa]">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--fluent-fg4)] mb-2">
              System Message
            </div>
            {type === "inline-notice" && <InlineNoticeExample />}
            {type === "divider" && <DividerExample />}
            {type === "inline-marker" && <BoundaryMarkerExample />}
            {type === "feedback-card" && <FeedbackCardExample />}
          </div>
        )}
      </div>
    </div>
  );
}

function ChatBubble({
  side,
  text,
  isAssistant,
}: {
  side: "left" | "right";
  text: string;
  isAssistant?: boolean;
}) {
  return (
    <div
      className={`flex mb-3 ${side === "right" ? "justify-end" : "justify-start"}`}
    >
      {isAssistant && (
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#464FEB] to-[#7B61FF] flex items-center justify-center mr-2 mt-0.5 shrink-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
            <path d="M6 1l1.5 3.5L11 6l-3.5 1.5L6 11l-1.5-3.5L1 6l3.5-1.5z" />
          </svg>
        </div>
      )}
      <div
        className={`max-w-[75%] px-3 py-2 rounded-lg text-[13px] leading-relaxed ${
          side === "right"
            ? "bg-[#e8ebfa] text-[var(--fluent-fg1)]"
            : "bg-[var(--fluent-bg4)] text-[var(--fluent-fg1)]"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function InlineNoticeExample() {
  return (
    <div className="flex items-center gap-2 py-1">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="var(--fluent-fg3)"
      >
        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
      </svg>
      <span
        className="text-sm"
        style={{ color: "var(--fluent-fg2)", lineHeight: "20px" }}
      >
        Saved as{" "}
        <strong style={{ color: "var(--fluent-fg1)", fontWeight: 600 }}>
          Research Assistant
        </strong>
      </span>
      <span
        className="text-sm ml-1 cursor-pointer"
        style={{ color: "var(--fluent-brand)" }}
      >
        Undo
      </span>
    </div>
  );
}

function DividerExample() {
  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: "var(--fluent-stroke2)" }}
      />
      <span
        className="text-xs shrink-0 px-2"
        style={{
          color: "var(--fluent-fg4)",
          fontSize: "12px",
          lineHeight: "16px",
        }}
      >
        Screen sharing ended
      </span>
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: "var(--fluent-stroke2)" }}
      />
    </div>
  );
}

function BoundaryMarkerExample() {
  return (
    <div className="py-2">
      <div
        className="h-px mb-3"
        style={{ backgroundColor: "var(--fluent-stroke2)" }}
      />
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="var(--fluent-fg3)"
        >
          <path d="M8 1a4 4 0 014 4v3a2 2 0 012 2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3a2 2 0 012-2V5a4 4 0 014-4zm2.5 7h-5A1.5 1.5 0 004 9.5V13a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V9.5A1.5 1.5 0 0010.5 8zM8 2.5A2.5 2.5 0 005.5 5v3h5V5A2.5 2.5 0 008 2.5z" />
        </svg>
        <span
          className="text-xs"
          style={{
            color: "var(--fluent-fg3)",
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          Messages beyond this point are only visible to you
        </span>
      </div>
    </div>
  );
}

function FeedbackCardExample() {
  return (
    <div className="py-2">
      <div
        className="rounded-lg border px-4 py-3"
        style={{
          borderColor: "var(--fluent-stroke2)",
          backgroundColor: "var(--fluent-bg4)",
        }}
      >
        <div className="flex items-start gap-2.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="var(--fluent-fg3)"
            className="mt-0.5 shrink-0"
          >
            <path d="M8 1.5l1.85 3.75L14 5.88l-3 2.93.7 4.12L8 10.88l-3.7 2.05.7-4.12-3-2.93 4.15-.63L8 1.5z" />
          </svg>
          <div className="flex-1 min-w-0">
            <span
              className="text-[13px] font-semibold block mb-2"
              style={{ color: "var(--fluent-fg1)" }}
            >
              How is Copilot performing?
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className="w-8 h-8 rounded-md border text-[13px] font-medium transition-colors"
                  style={{
                    borderColor: "var(--fluent-stroke2)",
                    color: "var(--fluent-fg2)",
                    backgroundColor: "white",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[11px]" style={{ color: "var(--fluent-fg4)" }}>
                Not helpful
              </span>
              <span className="text-[11px]" style={{ color: "var(--fluent-fg4)" }}>
                Very helpful
              </span>
            </div>
          </div>
          <button className="text-[var(--fluent-fg4)] hover:text-[var(--fluent-fg1)] transition-colors shrink-0 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M3.17 3.17a.5.5 0 01.7 0L6 5.3l2.13-2.13a.5.5 0 01.7.7L6.7 6l2.13 2.13a.5.5 0 01-.7.7L6 6.7 3.87 8.83a.5.5 0 01-.7-.7L5.3 6 3.17 3.87a.5.5 0 010-.7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function BannerExample({ variant }: { variant: "info" | "warning" }) {
  const isWarning = variant === "warning";
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-3 -mx-6 -mb-3"
      style={{
        backgroundColor: isWarning
          ? "var(--fluent-yellow-bg)"
          : "var(--fluent-bg4)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={
          isWarning ? "var(--fluent-yellow-fg)" : "var(--fluent-fg2)"
        }
      >
        {isWarning ? (
          <path d="M8.56 1.69a.63.63 0 00-1.12 0L1.06 13.5a.63.63 0 00.56.88h12.76a.63.63 0 00.56-.88L8.56 1.69zM8 5.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 5.5zM8 12a.75.75 0 100-1.5.75.75 0 000 1.5z" />
        ) : (
          <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 018 4zm0 8a.75.75 0 100-1.5.75.75 0 000 1.5z" />
        )}
      </svg>
      <span
        className="text-sm flex-1"
        style={{ color: "var(--fluent-fg1)", lineHeight: "20px" }}
      >
        {isWarning ? (
          "Your organization has restricted some topics in this chat"
        ) : (
          <>
            <strong style={{ fontWeight: 600 }}>Mona Kane</strong> shared this
            chat with you
          </>
        )}
      </span>
      {!isWarning && (
        <button className="text-[var(--fluent-fg4)] hover:text-[var(--fluent-fg1)] transition-colors">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M3.17 3.17a.5.5 0 01.7 0L6 5.3l2.13-2.13a.5.5 0 01.7.7L6.7 6l2.13 2.13a.5.5 0 01-.7.7L6 6.7 3.87 8.83a.5.5 0 01-.7-.7L5.3 6 3.17 3.87a.5.5 0 010-.7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
