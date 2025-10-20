import { AnswerId, DefaultAnswers, QUESTIONS } from "@/data/info";

export type TouchedMap = Partial<Record<AnswerId, true>>;

export function calcFinalTotal(ans: DefaultAnswers) {
  const sum = QUESTIONS.reduce((acc, question) => acc + ans[question.id], 0);
  return Math.round(sum * 100) / 100;
}

export function calcNowTotal(
  ans: DefaultAnswers,
  touched: TouchedMap,
  currentId: AnswerId
) {
  let sum = 0;
  for (const question of QUESTIONS) {
    if (touched[question.id]) sum += ans[question.id];
  }
  if (!touched[currentId]) {
    sum += ans[currentId];
  }
  return Math.round(sum * 100) / 100;
}
