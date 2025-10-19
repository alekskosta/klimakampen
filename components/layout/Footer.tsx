import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <figure className={styles.absolute1}>
        <img src="/ClimateImage/blue.png" alt="" aria-hidden="true" />
      </figure>

      <figure className={styles.absolute2}>
        <img src="/ClimateImage/blue.png" alt="" aria-hidden="true" />
      </figure>

      <div className={styles.footerText}>
        <p>{new Date().getFullYear()} Klimakampen</p>
        <small> © All rights reserved</small>
      </div>
    </footer>
  );
}
