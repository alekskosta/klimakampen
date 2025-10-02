export type Actions = {
  id: string;
  image: string;
  title: string;
  summary: string;
};

const CLIMATEACTIONS: Actions[] = [
  {
    id: "tt-001",
    image: "/ClimateActionImages/spar_strom_hjemme.jpg",
    title: "Spar strøm hjemme",
    summary:
      "Bytt til LED, trekk ut ladere, senk innetemperaturen og bruk tidsstyring. Små grep gir store kutt over tid.",
  },
  {
    id: "tt-002",
    image: "/ClimateActionImages/reis_gront_i_hverdagen.jpg",
    title: "Reis grønt i hverdagen",
    summary:
      "Gå, sykle eller ta kollektivt når du kan. Kombiner med bildeling ved behov for bil.",
  },
  {
    id: "tt-003",
    image: "/ClimateActionImages/spis_mer_plantebasert.jpg",
    title: "Spis mer plantebasert",
    summary:
      "Bytt ut noe kjøtt med belgfrukter, korn og grønnsaker. Start med én kjøttfri dag i uka.",
  },
  {
    id: "tt-004",
    image: "/ClimateActionImages/kutt_matsvinn.jpg",
    title: "Kutt matsvinn",
    summary:
      "Planlegg innkjøp, bruk restemat kreativt og frys ned overskudd. Se og lukt – ikke bare dato.",
  },
  {
    id: "tt-005",
    image: "/ClimateActionImages/reparer_og_kjop_brukt.jpg",
    title: "Reparer og kjøp brukt",
    summary:
      "Forleng levetiden på klær og elektronikk. Kjøp brukt før nytt – og selg videre det du ikke bruker.",
  },
  {
    id: "tt-006",
    image: "/ClimateActionImages/faerre_flyreiser.jpg",
    title: "Færre flyreiser",
    summary:
      "Velg tog på kortere strekninger, og slå sammen turer. Når du må fly: bli lengre og reis sjeldnere.",
  },
  {
    id: "tt-007",
    image: "/ClimateActionImages/isoler_bedre.jpg",
    title: "Isoler bedre og vurder varmepumpe",
    summary:
      "Tett trekk, oppgrader vinduer og installer varmepumpe der det passer. Store kutt i både utslipp og strømregning.",
  },
  {
    id: "tt-008",
    image: "/ClimateActionImages/gronn_strom.jpg",
    title: "Produser eller kjøp grønn strøm",
    summary:
      "Vurder solceller på taket, smarte styringssystemer og en strømavtale med opprinnelsesgaranti.",
  },
  {
    id: "tt-009",
    image: "/ClimateActionImages/gronn_okonomi.jpg",
    title: "Grønn økonomi",
    summary:
      "Flytt sparepenger/pensjon til fond og banker med lavt karbonavtrykk. Etterspør bærekraft hos leverandører.",
  },
  {
    id: "tt-010",
    image: "/ClimateActionImages/engasjer_deg_lokalt.jpg",
    title: "Engasjer deg lokalt",
    summary:
      "Delta i nabolagsprosjekter, påvirk beslutningstakere og stem grønt. Sammen får vi større effekt.",
  },
];

export function showInfo(): Actions[] {
  return CLIMATEACTIONS;
}
