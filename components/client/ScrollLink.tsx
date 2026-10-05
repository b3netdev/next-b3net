"use client";

import React from "react";

const HIGHLIGHT_CLASS = "toc-highlight";

// Only one section is highlighted at a time
let clearActiveHighlight: (() => void) | null = null;

const highlightSection = (el: HTMLElement) => {
  clearActiveHighlight?.();

  el.classList.add(HIGHLIGHT_CLASS);

  const clear = () => {
    el.classList.remove(HIGHLIGHT_CLASS);
    document.removeEventListener("click", clear);
    clearTimeout(timer);
    if (clearActiveHighlight === clear) clearActiveHighlight = null;
  };

  // Attach after the current click finishes so it doesn't clear itself
  const timer = setTimeout(() => document.addEventListener("click", clear), 0);
  clearActiveHighlight = clear;
};

export default function ScrollLink({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(targetId);
    if (el) highlightSection(el);

    const isMobile = window.innerWidth <= 998;
    if (isMobile) return;
    e.preventDefault();

    if (!el) return;

    const offset = 120;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <a href={`#${targetId}`} className={className} onClick={handleScroll}>
      {children}
    </a>
  );
}