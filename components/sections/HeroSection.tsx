import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <Image
        className={styles.absolute5}
        aria-hidden="true"
        src="/ClimateImage/coldThree.png"
        alt=""
        width={300}
        height={900}
      />

      <Image
        className={styles.absolute6}
        aria-hidden="true"
        src="/ClimateImage/warmthThreeFour.png"
        alt=""
        width={300}
        height={900}
      />

      <Image
        className={styles.absolute7}
        aria-hidden="true"
        src="/ClimateImage/coldThree.png"
        alt=""
        width={300}
        height={900}
      />

      <Image
        className={styles.absolute8}
        aria-hidden="true"
        src="/ClimateImage/warmthThreeFour.png"
        alt=""
        width={300}
        height={900}
      />

      <h1 id="hero-title" className={styles.heroTitle}>
        Klimakampen starter med oss
      </h1>
      <p className={styles.text}>
        Vi står midt i en avgjørende tid. Sammen kan vi skape endring, redusere
        utslipp og bygge en bærekraftig fremtid – for oss selv og kommende
        generasjoner.
      </p>

      <Link href="/klimatiltak" className={styles.heroLink}>
        Bli med i kampen
      </Link>
    </section>
  );
}
