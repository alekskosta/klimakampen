"use client";

import Co2PerPersonChart from "@/components/emissions/Co2PerPersonChart";
import CO2PerPersonTable from "@/components/emissions/CO2PerPersonTable";
import { useState } from "react";

export default function KlimaVerstinger() {
  const [show, setShow] = useState<boolean>(true);

  function toggleShow() {
    setShow((prev) => !prev);
  }
  return (
    <section className="climate-worst">
      <img
        src="./ClimateImage/coldthree.png"
        className="absolute5"
        aria-hidden="true"
        alt=""
      />

      <img
        src="./ClimateImage/coldthree.png"
        className="absolute6"
        aria-hidden="true"
        alt=""
      />
      <h1 className="page-titles">Info om klima-verstinger</h1>
      <p className="text">
        CO₂-utslipp per person er et mål på hvor mye klimagasser (omregnet til
        tonn CO₂) hver innbygger i snitt står for i løpet av et år. Tallene her
        er som regel territorielle utslipp fra energi og industri fordelt på
        befolkningen – de sier noe om hvor karbonintensiv økonomien er, men
        inkluderer ikke nødvendigvis utslipp “skjult” i importerte varer og
        tjenester. Små land med energiintensiv industri eller stor
        olje/gass-produksjon kan få høye tall. Bruk derfor sammenligningen som
        en pekepinn over tid og mellom land, ikke som en presis “klimascore” for
        enkeltpersoner.
      </p>

      {show ? <CO2PerPersonTable /> : <Co2PerPersonChart />}
      <button
        type="button"
        className="button"
        onClick={() => {
          toggleShow();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {show ? "Vis graf" : "Vis tabell"}
      </button>
    </section>
  );
}
