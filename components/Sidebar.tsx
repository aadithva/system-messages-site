"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

const navItems: NavItem[] = [
  { id: "overview", label: "Overview" },
  {
    id: "classification",
    label: "Classification",
    children: [
      { id: "confirmation", label: "Confirmation" },
      { id: "state-change", label: "State Change" },
      { id: "notice", label: "Notice" },
      { id: "feedback", label: "Feedback" },
    ],
  },
  {
    id: "visual-anatomy",
    label: "Visual Anatomy",
    children: [
      { id: "inline-notice", label: "Inline Notice" },
      { id: "divider", label: "Divider" },
      { id: "banner", label: "Banner" },
      { id: "inline-marker", label: "Inline Notice" },
      { id: "feedback-card", label: "Feedback Card" },
    ],
  },
  { id: "content-guidelines", label: "Content Guidelines" },
  { id: "behavior", label: "Behavior" },
  {
    id: "scenarios",
    label: "Scenarios",
    children: [
      { id: "audited-scenarios", label: "Audited Scenarios" },
      { id: "future-scenarios", label: "Future Scenarios" },
    ],
  },
  { id: "validation", label: "Validation" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the topmost visible section
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    const allIds = navItems.flatMap((item) => [
      item.id,
      ...(item.children?.map((c) => c.id) || []),
    ]);

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (id: string, item: NavItem) => {
    if (activeId === id) return true;
    if (item.children?.some((c) => c.id === activeId)) return id === item.id;
    return false;
  };

  return (
    <nav className="w-[240px] shrink-0 hidden lg:block">
      <div className="fixed top-[84px] w-[240px] h-[calc(100vh-84px)] overflow-y-auto py-6 pl-6 pr-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--fluent-fg4)] mb-4">
          System Messages
        </div>
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-3 py-1.5 text-sm rounded-sm transition-colors"
                style={{
                  color: isActive(item.id, item)
                    ? "var(--learn-sidebar-active)"
                    : "var(--fluent-fg1)",
                  fontWeight: isActive(item.id, item) ? 600 : 400,
                  backgroundColor: isActive(item.id, item)
                    ? "rgba(0, 120, 212, 0.05)"
                    : "transparent",
                  borderLeft: isActive(item.id, item)
                    ? "2px solid var(--learn-sidebar-active)"
                    : "2px solid transparent",
                }}
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="ml-4 mt-0.5 space-y-0.5">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className="block px-3 py-1 text-[13px] rounded-sm transition-colors"
                        style={{
                          color:
                            activeId === child.id
                              ? "var(--learn-sidebar-active)"
                              : "var(--fluent-fg2)",
                          fontWeight: activeId === child.id ? 600 : 400,
                        }}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
