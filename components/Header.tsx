"use client";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "var(--learn-header-bg)" }}
    >
      <div className="flex items-center h-[48px] px-6">
        <div className="flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="opacity-80"
          >
            <rect x="1" y="1" width="8" height="8" rx="1" fill="#f25022" />
            <rect x="11" y="1" width="8" height="8" rx="1" fill="#7fba00" />
            <rect x="1" y="11" width="8" height="8" rx="1" fill="#00a4ef" />
            <rect x="11" y="11" width="8" height="8" rx="1" fill="#ffb900" />
          </svg>
          <span className="text-white/60 text-sm font-normal">|</span>
          <span className="text-white text-sm font-semibold tracking-tight">
            Learn
          </span>
        </div>
      </div>
      <div
        className="flex items-center h-[36px] px-6 text-sm border-t border-white/10"
        style={{ backgroundColor: "var(--learn-header-bg)" }}
      >
        <nav className="flex items-center gap-1.5 text-white/70">
          <span className="hover:text-white/90 cursor-pointer">Copilot</span>
          <ChevronRight />
          <span className="hover:text-white/90 cursor-pointer">
            Design System
          </span>
          <ChevronRight />
          <span className="text-white/90">System Messages</span>
        </nav>
      </div>
    </header>
  );
}

function ChevronRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      className="opacity-50"
    >
      <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
