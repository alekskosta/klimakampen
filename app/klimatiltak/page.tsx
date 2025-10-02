import ClimateActionCard from "@/components/cards/ClimateActionCard";
import { showInfo } from "@/data/info";

export default function Klimatiltak() {
  const data = showInfo();
  return (
    <section className="climateSection">
      <h1 className="page-titles">Klimatiltak</h1>
      <ClimateActionCard items={data} />
    </section>
  );
}
