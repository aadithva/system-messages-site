"use client";

import { useEffect, useState } from "react";

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "classification", label: "Classification" },
  { id: "visual-anatomy", label: "Visual Anatomy" },
  { id: "content-guidelines", label: "Content Guidelines" },
  { id: "behavior", label: "Behavior" },
  { id: "scenarios", label: "Scenarios" },
  { id: "validation", label: "Validation" },
];

export default function OnPageToc() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-[200px] shrink-0 hidden xl:block">
      <div className="fixed top-[84px] w-[200px] h-[calc(100vh-84px)] overflow-y-auto py-6 pr-6 pl-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fluent-fg4)] mb-3">
          In this article
        </div>
        <ul className="space-y-0.5 border-l border-[var(--learn-border)]">
          {tocItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block pl-3 py-1 text-[13px] transition-colors"
                style={{
                  color:
                    activeId === id
                      ? "var(--learn-sidebar-active)"
                      : "var(--fluent-fg2)",
                  fontWeight: activeId === id ? 600 : 400,
                  borderLeft:
                    activeId === id
                      ? "2px solid var(--learn-sidebar-active)"
                      : "2px solid transparent",
                  marginLeft: "-1px",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
