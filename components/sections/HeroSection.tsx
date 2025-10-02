import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <h1 id="hero-title">Klimakampen starter med oss</h1>
      <p>
        Vi står midt i en avgjørende tid. Sammen kan vi skape endring, redusere
        utslipp og bygge en bærekraftig fremtid – for oss selv og kommende
        generasjoner.
      </p>
      <Link href="/" className="link">
        Bli med i kampen
      </Link>
    </section>
  );
}
