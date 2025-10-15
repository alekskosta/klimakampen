import Calculator from "@/components/calculator/Calculator";

export default function Klimakalkulator() {
  return (
    <section className="climate-calc">
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
      <h1 className="page-titles">Beregn ditt klimafotavtrykk</h1>
      <Calculator />
    </section>
  );
}
