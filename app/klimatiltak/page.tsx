import ClimateActionCard from "@/components/cards/ClimateActionCard";
import { showInfo } from "@/data/info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klimatiltak i hverdagen – Klimakampen",
  description: "Ti konkrete klimatiltak du kan starte med i dag.",
};

export default function Klimatiltak() {
  const data = showInfo();
  return (
    <section className="climateSection">
      <img
        src="./ClimateImage/coldthree.png"
        className="absolute5"
        aria-hidden="true"
      />

      <img
        src="./ClimateImage/coldthree.png"
        className="absolute6"
        aria-hidden="true"
      />
      <h1 className="page-titles">Klimatiltak</h1>
      <ClimateActionCard items={data} />
    </section>
  );
}
