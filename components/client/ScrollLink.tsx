"use client";

import React from "react";

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
    const isMobile = window.innerWidth <= 998;
    if (isMobile) return;
    e.preventDefault();

    const el = document.getElementById(targetId);
    if (!el) return;

    const offset = 100;

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