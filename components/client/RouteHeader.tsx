"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Navbar from "./Navcontainer";
import { BASE_URL } from "@/lib/url";
import styles from "./RouteHeader.module.css";

export default function RouteHeader() {
  const pathname = usePathname();

  if (pathname !== "/ai-instructions" && pathname !== "/ai-instructions/") {
    return <Navbar />;
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="B3NET homepage">
          <img
            src={`${BASE_URL}/wp-content/uploads/2026/07/B3net-logo.png`}
            alt="B3NET"
            width={219}
            height={71}
            className={styles.logo}
          />
        </Link>
      </div>
    </header>
  );
}