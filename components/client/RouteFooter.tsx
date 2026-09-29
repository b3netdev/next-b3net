"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import FooterClient from "./FooterClient";
import styles from "./RouteFooter.module.css";

export default function RouteFooter() {
  const pathname = usePathname();

  if (pathname !== "/ai-instructions" && pathname !== "/ai-instructions/") {
    return <FooterClient />;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>© 2026 B3NET Inc.</span>

        <nav className={styles.links} aria-label="Document footer">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms &amp; Conditions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}