import Link from "next/link";
import styles from "./HeroSection.module.css";
import MouseTrail from "../effects/MouseTrail";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <MouseTrail />
      <img
        className={styles.absolute5}
        aria-hidden="true"
        src="/ClimateImage/coldThree.png"
        alt=""
      />

      <img
        className={styles.absolute6}
        aria-hidden="true"
        src="/ClimateImage/warmthThreeFour.png"
        alt=""
      />

      <img
        className={styles.absolute7}
        aria-hidden="true"
        src="/ClimateImage/coldThree.png"
        alt=""
      />

      <img
        className={styles.absolute8}
        aria-hidden="true"
        src="/ClimateImage/warmthThreeFour.png"
        alt=""
      />

      <h1 id="hero-title" className={styles.heroTitle}>
        Klimakampen starter med oss
      </h1>
      <p className={styles.text}>
        Vi står midt i en avgjørende tid. Sammen kan vi skape endring, redusere
        utslipp og bygge en bærekraftig fremtid – for oss selv og kommende
        generasjoner.
      </p>

      <Link href="/klimatiltak" className="buttonLink">
        Bli med i kampen
      </Link>
    </section>
  );
}
