import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  QUESTIONS,
  DEFAULT_ANSWERS,
  type AnswerId,
  type DefaultAnswers,
} from "@/data/info";
import { calcFinalTotal, calcNowTotal, TouchedMap } from "./climateCalc";

type State = {
  step: number;
  ans: DefaultAnswers;
  touched: TouchedMap;
  showResult: boolean;
  showWelcome: boolean;
};

type Derived = {
  currentId: () => AnswerId;
  totalProgress: () => number;
  totalFinal: () => number;
};

type Action = {
  choose: (id: AnswerId, value: number) => void;
  next: () => void;
  prev: () => void;
  restart: () => void;
  welcome: () => void;
};

export const useCalcStore = create<State & Derived & Action>()(
  persist(
    (set, get) => ({
      step: 0,
      ans: DEFAULT_ANSWERS,
      touched: {},
      showResult: false,
      showWelcome: true,

      currentId: () => QUESTIONS[get().step].id,
      totalProgress: () =>
        calcNowTotal(get().ans, get().touched, get().currentId()),
      totalFinal: () => calcFinalTotal(get().ans),

      choose: (id, value) =>
        set((state) => ({
          ans: { ...state.ans, [id]: value },
          touched: { ...state.touched, [id]: true },
        })),

      next: () =>
        set((state) => {
          const id = QUESTIONS[state.step].id;
          const touched = { ...state.touched, [id]: true };
          const last = state.step >= QUESTIONS.length - 1;
          return last
            ? { touched, showResult: true }
            : { touched, step: state.step + 1 };
        }),

      prev: () => set((state) => ({ step: Math.max(0, state.step - 1) })),

      restart: () =>
        set({
          step: 0,
          ans: DEFAULT_ANSWERS,
          touched: {},
          showResult: false,
          showWelcome: true,
        }),

      welcome: () => set({ showWelcome: false }),
    }),
    {
      name: "klimakalkulator",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        step: state.step,
        ans: state.ans,
        touched: state.touched,
        showResult: state.showResult,
        showWelcome: state.showWelcome,
      }),
    }
  )
);
