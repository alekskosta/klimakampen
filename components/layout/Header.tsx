"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <Link href="/" className="link">
        Klimakampen
      </Link>

      <nav>
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          aria-controls="meny"
        >
          <span aria-hidden="true">{open ? "X" : "☰"}</span>
        </button>
        <ul id="meny" className={`${styles.nav} ${open ? styles.show : ""}`}>
          <li>
            <Link href="/klimatiltak" className="link">
              Klimatiltak
            </Link>
          </li>

          <li>
            <Link href="/klima-verstinger" className="link">
              Klima-verstinger
            </Link>
          </li>

          <li>
            <Link href="/klimakalkulator" className="link">
              Klimakalkulator
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
