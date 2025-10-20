"use client";
import Co2PerPersonChart from "@/components/emissions/Co2PerPersonChart";
import CO2PerPersonTable from "@/components/emissions/CO2PerPersonTable";
import { useState } from "react";

export default function Switcher() {
  const [show, setShow] = useState<boolean>(true);

  function toggleShow() {
    setShow((prev) => !prev);
  }
  return (
    <div>
      {show ? <CO2PerPersonTable /> : <Co2PerPersonChart />}
      <button type="button" className="button" onClick={() => toggleShow()}>
        {show ? "Vis graf" : "Vis tabell"}
      </button>
    </div>
  );
}
