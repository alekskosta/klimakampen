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
      <h1 className="page-titles">Klimatiltak</h1>
      <ClimateActionCard items={data} />
    </section>
  );
}
