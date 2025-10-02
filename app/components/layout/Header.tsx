import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        Klimakampen
      </Link>

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/" className={styles.link}>
              Klimatiltak
            </Link>
          </li>

          <li>
            <Link href="/" className={styles.link}>
              Klima-verstinger
            </Link>
          </li>

          <li>
            <Link href="/" className={styles.link}>
              Klimakalkulator
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
