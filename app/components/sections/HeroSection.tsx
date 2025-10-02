import Link from "next/link";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">Klimakampen starter med oss</h1>
      <p>
        Vi står midt i en avgjørende tid. Sammen kan vi skape endring, redusere
        utslipp og bygge en bærekraftig fremtid – for oss selv og kommende
        generasjoner.
      </p>
      <Link href="/" type="button">
        Bli med i kampen
      </Link>
    </section>
  );
}
