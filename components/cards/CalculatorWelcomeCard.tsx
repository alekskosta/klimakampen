import styles from "./CalculatorWelcomeCard.module.css";

export default function CalculatorWelcomeCard({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <section
      className={styles.welcome}
      aria-labelledby="welcome-title"
      aria-describedby="welcome-desc"
    >
      <h2 id="welcome-title" className={styles.calcTitle}>
        Test vår klimakalkulator
      </h2>
      <p id="welcome-desc">
        Ta testen vår – 7 kjappe spørsmål (ca. 1 min). Du sammenlignes med
        snittet i Norge (≈ <strong>8,0 t CO₂e/år</strong>). Ingen innlogging –
        bare rett på sak.
      </p>
      <button type="button" className="buttonLink" onClick={onStart}>
        Start testen
      </button>
    </section>
  );
}
