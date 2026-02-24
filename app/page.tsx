"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import OnPageToc from "@/components/OnPageToc";
import Overview from "@/sections/Overview";
import Classification from "@/sections/Classification";
import VisualAnatomy from "@/sections/VisualAnatomy";
import ContentGuidelines from "@/sections/ContentGuidelines";
import Behavior from "@/sections/Behavior";
import Scenarios from "@/sections/Scenarios";
import Validation from "@/sections/Validation";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen pt-[84px]">
        <Sidebar />
        <main className="flex-1 min-w-0 max-w-[900px] mx-auto px-8 py-8">
          <div className="mb-8">
            <h1 className="text-[32px] font-semibold text-[var(--fluent-fg1)] leading-tight mb-2">
              System Messages
            </h1>
            <p className="text-[15px] text-[var(--fluent-fg2)] leading-relaxed">
              A classification framework for non-conversational messages in the
              Microsoft Copilot chat surface. Covers 4 categories, 5 visual types,
              content guidelines, behavior rules, and 16 scenario mappings.
            </p>
            <div className="flex items-center gap-4 mt-4 text-xs text-[var(--fluent-fg4)]">
              <span>Article</span>
              <span className="w-1 h-1 rounded-full bg-[var(--fluent-fg4)]" />
              <span>02/23/2026</span>
              <span className="w-1 h-1 rounded-full bg-[var(--fluent-fg4)]" />
              <span>16 scenarios mapped</span>
            </div>
          </div>

          <div className="content-area">
            <Overview />
            <Classification />
            <VisualAnatomy />
            <ContentGuidelines />
            <Behavior />
            <Scenarios />
            <Validation />
          </div>

          <footer className="mt-16 pt-8 border-t border-[var(--learn-border)] pb-12">
            <div className="flex items-center justify-between text-xs text-[var(--fluent-fg4)]">
              <span>System Messages Framework — Microsoft Copilot Design Spec</span>
              <span>Last updated: February 23, 2026</span>
            </div>
          </footer>
        </main>
        <OnPageToc />
      </div>
    </>
  );
}
