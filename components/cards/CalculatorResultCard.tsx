import Link from "next/link";
import styles from "./CalculatorResultCard.module.css";
import CalculatorResultTable from "../emissions/CalculatorResultTable";

export default function CalculatorResultCard({
  total,
  rows,
  onRestart,
}: {
  total: number;
  rows: {
    activity: string;
    userValue: number;
    avgValue: number;
  }[];
  onRestart: () => void;
}) {
  let message: string;
  if (total === 8.0) {
    message = "Du ligger omtrent på snittet";
  } else if (total > 8.0) {
    message = "Du ligger over snittet";
  } else {
    message = "Du ligger under snittet";
  }
  return (
    <section>
      <article className={styles.card} aria-labelledby="result-title">
        <h2 id="result-title" className={styles.calcTitle}>
          Resultat fra klimakalkulatoren
        </h2>
        <p>
          En gjennomsnittlig person i Norge slipper ut omtrent{" "}
          <strong>8,00 tonn CO₂e</strong> i året.
        </p>
        <h3>Ditt resultat: {total.toFixed(2)} tonn CO₂e</h3>
        <p>{message}</p>
        <p>
          Se hva du kan gjøre for å redusere utslippene dine{" "}
          <Link
            href="/klimatiltak"
            className="link orange-text"
            aria-label="Les om klimatiltak"
          >
            her
          </Link>
          .
        </p>
      </article>

      <section>
        <CalculatorResultTable rows={rows} />
        <button
          type="button"
          onClick={() => {
            onRestart();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="button"
        >
          Beregn på nytt!
        </button>
      </section>
    </section>
  );
}
