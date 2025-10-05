import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className="link">
        Klimakampen
      </Link>

      <nav>
        <ul className={styles.nav}>
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
