import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <figure className={styles.absolute1}>
        <Image
          src="/ClimateImage/blue.png"
          alt=""
          width={600}
          height={600}
          priority={true}
        />
      </figure>

      <figure className={styles.absolute2}>
        <Image
          src="/ClimateImage/blue.png"
          alt=""
          width={600}
          height={600}
          priority={true}
        />
      </figure>

      <div className={styles.footerText}>
        <p>{new Date().getFullYear()} Klimakampen</p>
        <small> © All rights reserved</small>
      </div>
    </footer>
  );
}
