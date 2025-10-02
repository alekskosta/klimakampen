import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>{new Date().getFullYear()} Klimakampen</p>
        <small> © All rights reserved Aleksander Kostopoulos</small>
      </div>
    </footer>
  );
}
