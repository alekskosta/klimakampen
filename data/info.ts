// --------------------------------- Klimatiltak

export type Bullets = {
  id: string;
  text: string;
};

export type Section = {
  id: string;
  title: string;
  text: string;
  bullets: Bullets[];
};

export type Actions = {
  id: string;
  slug: string;
  image: string;
  title: string;
  summary: string;
  bodyTitle: string;
  body: string;
  sections: Section[];
  tips?: string[];
};

const CLIMATEACTIONS: Actions[] = [
  {
    id: "tt-001",
    slug: "spar-strom-hjemme",
    image: "/ClimateActionImages/spar_strom_hjemme.jpg",
    title: "Spar strøm hjemme",
    summary:
      "Bytt til LED, trekk ut ladere, senk innetemperaturen og bruk tidsstyring. Små grep gir store kutt over tid.",
    bodyTitle: "Om tiltaket",
    body: `Start med de enkleste kuttene: bytt til LED-pærer og slå av lys i rom du ikke bruker. 
Senk innetemperaturen 1–2 °C og bruk termostater eller tidsstyring på panelovner for å redusere unødig oppvarming. 
Trekk ut ladere og slå helt av utstyr i standby. Vask klær på lavere temperatur og fyll maskinen, og la tøy lufttørke når det passer. 
Tett trekk rundt vinduer og dører med tettelister, og bruk strømmåler-appen for å se hva som faktisk monner hjemme hos deg. 
Over tid kan du vurdere smartstyring (termostater/smarte plugger) og bedre isolasjon for varige kutt – det merkes på både utslipp og regning.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Oppvarming og belysning står ofte for en stor del av husholdningens strømforbruk. Små justeringer gir varig effekt.",
        bullets: [
          {
            id: "tt-001-hvorfor-1",
            text: "LED bruker 80–90 % mindre enn glødepærer",
          },
          {
            id: "tt-001-hvorfor-2",
            text: "1 °C lavere innetemp kan kutte flere prosent av oppvarmingsforbruket",
          },
          {
            id: "tt-001-hvorfor-3",
            text: "Standby-kutt slår ut gjennom hele året",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Gjør én ting av gangen og mål effekten.",
        bullets: [
          { id: "tt-001-start-1", text: "Bytt de mest brukte pærene først" },
          {
            id: "tt-001-start-2",
            text: "Sett nattsenking eller tidsstyring på ovner",
          },
          { id: "tt-001-start-3", text: "Tett trekk rundt vinduer/dører" },
        ],
      },
    ],
    tips: ["Bruk grenuttak med bryter", "Luft kort og effektivt vinterstid"],
  },
  {
    id: "tt-002",
    slug: "reis-gront-i-hverdagen",
    image: "/ClimateActionImages/reis_gront_i_hverdagen.jpg",
    title: "Reis grønt i hverdagen",
    summary:
      "Gå, sykle eller ta kollektivt når du kan. Kombiner med bildeling ved behov for bil.",
    bodyTitle: "Om tiltaket",
    body: `Planlegg hverdagsreisene med gange, sykkel eller kollektiv som førstevalg. 
Korte bilturer kan ofte erstattes av en tur eller elsykkel, som sparer tid i kø og parkering. 
Når du trenger bil, vurder bildeling i stedet for å eie – spesielt i byområder. 
Kombiner flere ærend i én tur (trip chaining) og bruk digitale møter når fysisk oppmøte ikke er nødvendig. 
Små vaneskifter gjennom uken gir stor effekt over året – for både klima, helse og lommebok.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Transport står for store utslipp. Små justeringer i hverdagen gir store kutt over året.",
        bullets: [
          {
            id: "tt-002-hvorfor-1",
            text: "Flere korte turer kan byttes ut med gange/sykkel",
          },
          {
            id: "tt-002-hvorfor-2",
            text: "Kollektiv gir lavt utslipp per passasjer",
          },
          {
            id: "tt-002-hvorfor-3",
            text: "Bildeling reduserer antall biler og kjøring",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Gjør det enkelt å velge grønt.",
        bullets: [
          {
            id: "tt-002-start-1",
            text: "Ha regntrekk/lys på sykkel lett tilgjengelig",
          },
          { id: "tt-002-start-2", text: "Sett opp månedskort og reiseapp" },
          {
            id: "tt-002-start-3",
            text: "Planlegg ærend i kjede (trip chaining)",
          },
        ],
      },
    ],
  },
  {
    id: "tt-003",
    slug: "spis-mer-plantebasert",
    image: "/ClimateActionImages/spis_mer_plantebasert.jpg",
    title: "Spis mer plantebasert",
    summary:
      "Bytt ut noe kjøtt med belgfrukter, korn og grønnsaker. Start med én kjøttfri dag i uka.",
    bodyTitle: "Om tiltaket",
    body: `Begynn enkelt med én plantebasert dag i uken, og bygg videre derfra. 
Bytt ut deler av kjøttet i kjente retter med bønner, linser eller erter for god smak og protein. 
Bruk sesonggrønnsaker og hele korn for bedre næring og lavere fotavtrykk. 
Utforsk nye oppskrifter og krydder – smak er nøkkelen til varige vaner. 
Planlegg måltider på forhånd og handle inn basisvarer som gjør det lett å lykkes gjennom en travel uke.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Produksjon av rødt kjøtt har høyere utslipp enn plantebaserte alternativer.",
        bullets: [
          {
            id: "tt-003-hvorfor-1",
            text: "Belgfrukter gir protein med lavt fotavtrykk",
          },
          {
            id: "tt-003-hvorfor-2",
            text: "Små endringer ukentlig gir stor årlig effekt",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Ta små steg – ofte.",
        bullets: [
          { id: "tt-003-start-1", text: "Kjøttfri mandag" },
          {
            id: "tt-003-start-2",
            text: "Bytt halvparten av kjøttdeigen med linser i gryter",
          },
          { id: "tt-003-start-3", text: "Test én ny oppskrift hver uke" },
        ],
      },
    ],
  },
  {
    id: "tt-004",
    slug: "kutt-matsvinn",
    image: "/ClimateActionImages/kutt_matsvinn.jpg",
    title: "Kutt matsvinn",
    summary:
      "Planlegg innkjøp, bruk restemat kreativt og frys ned overskudd. Se og lukt – ikke bare dato.",
    bodyTitle: "Om tiltaket",
    body: `Lag handleliste og planlegg måltider for å unngå impulskjøp som blir liggende. 
Oppbevar maten riktig og bruk «først inn, først ut». 
Tolk datomerking riktig: «best før» handler ofte om kvalitet, ikke sikkerhet. 
Frys ned brød i skiver og rester i porsjoner, og gjør rester om til nye retter. 
Å få kontroll på matsvinn er en av de mest kostnadseffektive klimahandlingene du kan gjøre hjemme.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Matsvinn er bortkastede ressurser og utslipp – helt unødvendig.",
        bullets: [
          { id: "tt-004-hvorfor-1", text: "Planlegging reduserer impulskjøp" },
          {
            id: "tt-004-hvorfor-2",
            text: "Riktig lagring forlenger holdbarhet",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Sett faste rutiner.",
        bullets: [
          { id: "tt-004-start-1", text: "Ukemeny + handleliste" },
          { id: "tt-004-start-2", text: "Restetirsdag" },
          { id: "tt-004-start-3", text: "Frys små porsjoner til senere" },
        ],
      },
    ],
  },
  {
    id: "tt-005",
    slug: "reparer-og-kjop-brukt",
    image: "/ClimateActionImages/reparer_og_kjop_brukt.jpg",
    title: "Reparer og kjøp brukt",
    summary:
      "Forleng levetiden på klær og elektronikk. Kjøp brukt før nytt – og selg videre det du ikke bruker.",
    bodyTitle: "Om tiltaket",
    body: `Gå gjennom det du eier: kan det fikses, oppgraderes eller brukes videre? 
Små reparasjoner (knepper, sømmer, batteribytte) forlenger levetiden betraktelig. 
Kjøp brukt når du kan – kvalitet varer, og du kutter både kostnad og fotavtrykk. 
Selg eller gi bort ting du ikke lenger trenger for å holde ressursene i sirkulasjon. 
Velg produkter med mulighet for reservedeler og god garanti når du først må kjøpe nytt.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Gjenbruk og reparasjon sparer både råvarer og energi.",
        bullets: [
          {
            id: "tt-005-hvorfor-1",
            text: "Forlengelse av levetid gir størst effekt",
          },
          {
            id: "tt-005-hvorfor-2",
            text: "Bruktmarkedet er stort og tilgjengelig",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Start med enkle grep.",
        bullets: [
          { id: "tt-005-start-1", text: "Sy-sett og batteribytte hjemme" },
          { id: "tt-005-start-2", text: "Kjøp brukt før nytt" },
          { id: "tt-005-start-3", text: "Selg/gi bort det du ikke bruker" },
        ],
      },
    ],
  },
  {
    id: "tt-006",
    slug: "faerre-flyreiser",
    image: "/ClimateActionImages/faerre_flyreiser.jpg",
    title: "Færre flyreiser",
    summary:
      "Velg tog på kortere strekninger, og slå sammen turer. Når du må fly: bli lengre og reis sjeldnere.",
    bodyTitle: "Om tiltaket",
    body: `Tenk «færre, men bedre» reiser: slå sammen møter, ferier og besøk når det lar seg gjøre. 
Velg tog eller buss på kortere strekninger, og vurder nattog som komfortabelt alternativ. 
Når fly er nødvendig, velg direkte ruter for å redusere både tid og utslipp per reise. 
Planlegg lengre opphold i stedet for mange korte turer, og bruk digitale møter til oppfølging mellom fysiske treff.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Flyreiser står for høye utslipp per tur, særlig korte turer.",
        bullets: [
          {
            id: "tt-006-hvorfor-1",
            text: "Direktefly kutter ekstrautslipp fra mellomlandinger",
          },
          {
            id: "tt-006-hvorfor-2",
            text: "Tog kan erstatte mange innenlandsreiser",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Planlegg smartere.",
        bullets: [
          { id: "tt-006-start-1", text: "Samle møter/ærend på én reise" },
          { id: "tt-006-start-2", text: "Bruk nattog der det finnes" },
          { id: "tt-006-start-3", text: "Digitale møter mellom fysiske treff" },
        ],
      },
    ],
  },
  {
    id: "tt-007",
    slug: "isoler-bedre-og-vurder-varmepumpe",
    image: "/ClimateActionImages/isoler_bedre.jpg",
    title: "Isoler bedre og vurder varmepumpe",
    summary:
      "Tett trekk, oppgrader vinduer og installer varmepumpe der det passer. Store kutt i både utslipp og strømregning.",
    bodyTitle: "Om tiltaket",
    body: `Start med en enkel tettesjekk og tiltakene som koster minst: tetningslister, tette gjennomføringer og justering av dører/vinduer. 
Isoler loft og kalde gulv for stor effekt per krone, og vurder energiglass eller varevinduer i trekkfulle rom. 
En riktig dimensjonert varmepumpe kan redusere forbruket til oppvarming betydelig; kombiner med soner og tidsstyring for best effekt.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Oppvarming er ofte den største posten på strømforbruket i hjemmet.",
        bullets: [
          {
            id: "tt-007-hvorfor-1",
            text: "Isolasjon reduserer varmetap permanent",
          },
          { id: "tt-007-hvorfor-2", text: "Varmepumper gir mye varme per kWh" },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Start enkelt og mål resultat.",
        bullets: [
          { id: "tt-007-start-1", text: "Tetningslister der det trekker" },
          { id: "tt-007-start-2", text: "Isoler loft først" },
          { id: "tt-007-start-3", text: "Vurder varmepumpe etter boligtype" },
        ],
      },
    ],
  },
  {
    id: "tt-008",
    slug: "produser-eller-kjop-gronn-strom",
    image: "/ClimateActionImages/gronn_strom.jpg",
    title: "Produser eller kjøp grønn strøm",
    summary:
      "Vurder solceller på taket, smarte styringssystemer og en strømavtale med opprinnelsesgaranti.",
    bodyTitle: "Om tiltaket",
    body: `Har du egnet tak, kan solceller dekke en betydelig del av årsforbruket over tid. 
Se på takvinkel, skygge og eksisterende elektrisk anlegg for å vurdere potensialet. 
Uten solceller kan du likevel påvirke: velg en strømavtale med opprinnelsesgaranti, og styr varmtvann, elbillading og oppvarming til gunstige timer.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Mer fornybar kraft og smartere forbruk gir lavere utslipp over tid.",
        bullets: [
          {
            id: "tt-008-hvorfor-1",
            text: "Egenproduksjon reduserer nettforbruk",
          },
          {
            id: "tt-008-hvorfor-2",
            text: "Styring flytter forbruk til lavbelastning",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Gjør en enkel vurdering først.",
        bullets: [
          { id: "tt-008-start-1", text: "Sjekk takvinkel/skygge" },
          {
            id: "tt-008-start-2",
            text: "Start med styring av varmtvann/elbillading",
          },
          { id: "tt-008-start-3", text: "Velg avtale med opprinnelsesgaranti" },
        ],
      },
    ],
  },
  {
    id: "tt-009",
    slug: "gronn-okonomi",
    image: "/ClimateActionImages/gronn_okonomi.jpg",
    title: "Grønn økonomi",
    summary:
      "Flytt sparepenger/pensjon til fond og banker med lavt karbonavtrykk. Etterspør bærekraft hos leverandører.",
    bodyTitle: "Om tiltaket",
    body: `Sjekk hvor banken og pensjonsleverandøren din investerer midlene, og vurder alternativer med tydelige klimamål og lavt karbonavtrykk. 
Se på kostnader, risiko og tidshorisont – endringer må passe økonomien din. 
Bruk forbrukermakt og velg leverandører som rapporterer åpent om utslipp og miljøtiltak.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Kapital styrer retning. Penger inn i grønt – mindre inn i brunt.",
        bullets: [
          {
            id: "tt-009-hvorfor-1",
            text: "Etterspørsel påvirker finansmarkedet",
          },
          {
            id: "tt-009-hvorfor-2",
            text: "Valg av bank/fond er et hverdagsvalg med effekt",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Ta små steg, informert.",
        bullets: [
          { id: "tt-009-start-1", text: "Gå gjennom spareavtaler/pensjon" },
          { id: "tt-009-start-2", text: "Sjekk bærekraftsrapporter" },
          {
            id: "tt-009-start-3",
            text: "Velg produkter som passer risikoen din",
          },
        ],
      },
    ],
  },
  {
    id: "tt-010",
    slug: "engasjer-deg-lokalt",
    image: "/ClimateActionImages/engasjer_deg_lokalt.jpg",
    title: "Engasjer deg lokalt",
    summary:
      "Delta i nabolagsprosjekter, påvirk beslutningstakere og stem grønt. Sammen får vi større effekt.",
    bodyTitle: "Om tiltaket",
    body: `Bli med i lokale initiativer som nabolagshager, byttegrupper, reparasjonskafeer og sykkelprosjekter. 
Samarbeid i borettslag om energitiltak, og påvirk kommunen via høringer og valg. 
Når vi handler sammen lokalt, skaper vi kulturendring, bedre løsninger og press for systemendring.`,
    sections: [
      {
        id: "hvorfor",
        title: "Hvorfor dette virker",
        text: "Lokalt engasjement skaper kulturendring og påvirker beslutninger.",
        bullets: [
          { id: "tt-010-hvorfor-1", text: "Felles prosjekter gir skala" },
          {
            id: "tt-010-hvorfor-2",
            text: "Politisk påvirkning styrker systemendring",
          },
        ],
      },
      {
        id: "kom-i-gang",
        title: "Slik kommer du i gang",
        text: "Finn folk, start smått.",
        bullets: [
          { id: "tt-010-start-1", text: "Bli med i en eksisterende gruppe" },
          { id: "tt-010-start-2", text: "Start en bytte-/reparasjonskveld" },
          {
            id: "tt-010-start-3",
            text: "Møt folkevalgte med konkrete forslag",
          },
        ],
      },
    ],
  },
];

export function showInfo(): Actions[] {
  return CLIMATEACTIONS;
}

// --------------------------------- Klima-verstinger

export type CO2_Worst_Country = {
  id: string;
  country: string;
  co2PerPerson: number;
  year: number;
};

const TOP20_CO2_PER_CAPITA_2023: CO2_Worst_Country[] = [
  { id: "PLW", country: "Palau", co2PerPerson: 62.59, year: 2023 },
  { id: "QAT", country: "Qatar", co2PerPerson: 43.55, year: 2023 },
  { id: "KWT", country: "Kuwait", co2PerPerson: 24.9, year: 2023 },
  { id: "BRN", country: "Brunei", co2PerPerson: 21.12, year: 2023 },
  { id: "BHR", country: "Bahrain", co2PerPerson: 20.7, year: 2023 },
  {
    id: "ARE",
    country: "United Arab Emirates",
    co2PerPerson: 20.22,
    year: 2023,
  },
  {
    id: "TTO",
    country: "Trinidad and Tobago",
    co2PerPerson: 19.71,
    year: 2023,
  },
  { id: "SAU", country: "Saudi Arabia", co2PerPerson: 17.15, year: 2023 },
  { id: "OMN", country: "Oman", co2PerPerson: 17.11, year: 2023 },
  { id: "CAN", country: "Canada", co2PerPerson: 14.91, year: 2023 },
  { id: "RUS", country: "Russia", co2PerPerson: 14.45, year: 2023 },
  { id: "AUS", country: "Australia", co2PerPerson: 14.21, year: 2023 },
  { id: "USA", country: "United States", co2PerPerson: 13.83, year: 2023 },
  { id: "SYC", country: "Seychelles", co2PerPerson: 12.76, year: 2023 },
  { id: "KAZ", country: "Kazakhstan", co2PerPerson: 12.43, year: 2023 },
  { id: "TWN", country: "Taiwan", co2PerPerson: 11.68, year: 2023 },
  { id: "LUX", country: "Luxembourg", co2PerPerson: 11.18, year: 2023 },
  { id: "KOR", country: "South Korea", co2PerPerson: 11.04, year: 2023 },
  { id: "TKM", country: "Turkmenistan", co2PerPerson: 10.51, year: 2023 },
  { id: "SGP", country: "Singapore", co2PerPerson: 9.38, year: 2023 },
];

export function showCountryInfo(): CO2_Worst_Country[] {
  return TOP20_CO2_PER_CAPITA_2023;
}

// --------------------------------- Klimakalkulator

export type Option = { label: string; value: number };
export type AnswerId =
  | "home"
  | "car"
  | "flight"
  | "diet"
  | "goods"
  | "services"
  | "waste";

export type Question = {
  id: AnswerId;
  title: string;
  options: Option[];
  defaultIndex: number; // hvilket alternativ som er standard (midt)
};

export const QUESTIONS: Question[] = [
  {
    id: "home",
    title: "Bolig: strøm/oppvarming",
    defaultIndex: 2,
    options: [
      { label: "Svært lavt (≤ 5 000 kWh)", value: 0.6 },
      { label: "Lavt (5–8 000 kWh)", value: 1.0 },
      { label: "Vanlig (8–12 000 kWh)", value: 1.3 }, // default
      { label: "Høyt (12–18 000 kWh)", value: 1.6 },
      { label: "Svært høyt (≥ 18 000 kWh)", value: 2.2 },
    ],
  },
  {
    id: "car",
    title: "Bilbruk i året",
    defaultIndex: 2,
    options: [
      { label: "Ingen / nesten ikke (0–2 000 km)", value: 0.0 },
      { label: "Lite (2–5 000 km)", value: 1.0 },
      { label: "Middels (5–10 000 km)", value: 2.0 }, // default
      { label: "Mye (10–15 000 km)", value: 3.0 },
      { label: "Svært mye (≥ 15 000 km)", value: 4.0 },
    ],
  },
  {
    id: "flight",
    title: "Flyreiser i året",
    defaultIndex: 2,
    options: [
      { label: "Ingen", value: 0.0 },
      { label: "Få (1 kort t/r)", value: 0.6 },
      { label: "Noen (2 korte eller 1 middels t/r)", value: 1.2 }, // default
      { label: "Mange (3–4 korte eller 1 lang t/r)", value: 2.0 },
      { label: "Svært mange (flere langdistanse årlig)", value: 3.2 },
    ],
  },
  {
    id: "diet",
    title: "Kosthold",
    defaultIndex: 2,
    options: [
      { label: "Vegan / mest plantebasert", value: 0.8 },
      { label: "Mye plantebasert", value: 1.2 },
      { label: "Gjennomsnitt", value: 1.7 }, // default
      { label: "Mye kjøtt", value: 2.1 },
      { label: "Svært kjøttrikt", value: 2.6 },
    ],
  },
  {
    id: "goods",
    title: "Varer/innkjøp (klær, elektronikk m.m.)",
    defaultIndex: 2,
    options: [
      { label: "Svært lavt forbruk", value: 0.3 },
      { label: "Lavt forbruk", value: 0.6 },
      { label: "Middels", value: 0.9 }, // default
      { label: "Høyt", value: 1.1 },
      { label: "Svært høyt", value: 1.5 },
    ],
  },
  {
    id: "services",
    title: "Tjenester & digitalt",
    defaultIndex: 2,
    options: [
      { label: "Svært lavt", value: 0.2 },
      { label: "Lavt", value: 0.4 },
      { label: "Middels", value: 0.6 }, // default
      { label: "Høyt", value: 0.8 },
      { label: "Svært høyt", value: 1.0 },
    ],
  },
  {
    id: "waste",
    title: "Avfall & gjenbruk",
    defaultIndex: 2,
    options: [
      { label: "Nesten null / svært bevisst", value: 0.05 },
      { label: "Lavt (god sortering/gjenbruk)", value: 0.2 },
      { label: "Vanlig", value: 0.3 }, // default
      { label: "Høyt avfall", value: 0.4 },
      { label: "Svært høyt avfall", value: 0.6 },
    ],
  },
];

export type DefaultAnswers = Record<AnswerId, number>;

export const DEFAULT_ANSWERS: DefaultAnswers = Object.fromEntries(
  QUESTIONS.map((q) => [q.id, q.options[q.defaultIndex].value])
) as DefaultAnswers;

export function showQuestions(): Question[] {
  return QUESTIONS;
}

export function showDefaultAnswers(): DefaultAnswers {
  return DEFAULT_ANSWERS;
}
