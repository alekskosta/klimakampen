import Calculator from "@/components/calculator/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klimakalkulator – Klimakampen",
  description:
    "Sjekk ditt årlige klimaavtrykk og sammenlign med snittet i Norge.",
};

export default function Klimakalkulator() {
  return (
    <section className="climate-calc">
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
      <h1 className="page-titles">Beregn ditt klimafotavtrykk</h1>
      <Calculator />
    </section>
  );
}
