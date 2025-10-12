"use client";
import { DEFAULT_ANSWERS, QUESTIONS } from "@/data/info";
import styles from "./Calculator.module.css";
import CalculatorResultCard from "../cards/CalculatorResultCard";
import CalculatorWelcomeCard from "../cards/CalculatorWelcomeCard";
import { useCalc, useHydration } from "@/lib/calculator/hooks";

export default function Calculator() {
  const {
    step,
    ans,
    showResult,
    showWelcome,
    totalProgress,
    totalFinal,
    choose,
    next,
    prev,
    restart,
    welcome,
  } = useCalc();

  const question = QUESTIONS[step];
  const first = step === 0;
  const last = step === QUESTIONS.length - 1;

  const rows = QUESTIONS.map((question) => ({
    activity: question.title,
    userValue: ans[question.id],
    avgValue: DEFAULT_ANSWERS[question.id],
    unit: "t CO₂e/år",
  }));

  const hydrated = useHydration();
  if (!hydrated) return null;

  if (showWelcome) {
    return <CalculatorWelcomeCard onStart={welcome} />;
  }

  if (showResult) {
    return (
      <CalculatorResultCard
        total={totalFinal()}
        rows={rows}
        onRestart={restart}
      />
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
      className={styles.form}
    >
      <p>
        Spørsmål {step + 1} / {QUESTIONS.length}
      </p>

      <h2>{question.title}</h2>
      <fieldset className={styles.group}>
        <legend className="sr-only">{question.title}</legend>

        {question.options.map((opt) => (
          <label key={opt.label} className={styles.label}>
            <input
              type="radio"
              name={question.id}
              className={styles.radio}
              checked={ans[question.id] === opt.value}
              onChange={() => choose(question.id, opt.value)}
            />{" "}
            {opt.label}
          </label>
        ))}
      </fieldset>

      <div className={styles.btnAndText}>
        <button type="button" onClick={prev} disabled={first}>
          Forrige
        </button>
        <button type="submit">{last ? "Vis resultat" : "Neste"}</button>
      </div>
      <span aria-live="polite" role="status">
        Ditt forbruk nå: {totalProgress().toFixed(2)} t CO₂e/år
      </span>
    </form>
  );
}
