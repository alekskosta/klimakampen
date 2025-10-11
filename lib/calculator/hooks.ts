import { useEffect, useState } from "react";
import { useCalcStore } from "./storage";
import { useShallow } from "zustand/react/shallow";

// zustand docs

export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubHydrate = useCalcStore.persist.onHydrate(() =>
      setHydrated(false)
    );

    const unsubFinishHydration = useCalcStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(useCalcStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};

export const useCalc = () =>
  useCalcStore(
    useShallow((state) => ({
      step: state.step,
      ans: state.ans,
      showResult: state.showResult,
      showWelcome: state.showWelcome,
      totalProgress: state.totalProgress,
      totalFinal: state.totalFinal,
      choose: state.choose,
      next: state.next,
      prev: state.prev,
      restart: state.restart,
      welcome: state.welcome,
    }))
  );
