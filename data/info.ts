export type Actions = {
  id: string;
  slug: string;
  image: string;
  title: string;
  summary: string;
  body?: string;
};

const CLIMATEACTIONS: Actions[] = [
  {
    id: "tt-001",
    slug: "spar-strom-hjemme",
    image: "/ClimateActionImages/spar_strom_hjemme.jpg",
    title: "Spar strøm hjemme",
    summary:
      "Bytt til LED, trekk ut ladere, senk innetemperaturen og bruk tidsstyring. Små grep gir store kutt over tid.",
    body:
      "Start med de enkleste kuttene: bytt til LED-pærer og slå av lys i rom du ikke bruker. " +
      "Senk innetemperaturen 1 °C og bruk termostater eller tidsstyring på panelovner for å redusere unødig oppvarming. " +
      "Trekk ut ladere og slå helt av utstyr som står i standby. " +
      "Vask klær på lavere temperatur og fyll maskinen, og la tøy lufttørke når det passer. " +
      "Tett trekk rundt vinduer og dører med tettelister, og bruk strømmåler-appen til å se hvilke tiltak som faktisk monner hjemme hos deg.",
  },
  {
    id: "tt-002",
    slug: "reis-gront-i-hverdagen",
    image: "/ClimateActionImages/reis_gront_i_hverdagen.jpg",
    title: "Reis grønt i hverdagen",
    summary:
      "Gå, sykle eller ta kollektivt når du kan. Kombiner med bildeling ved behov for bil.",
    body:
      "Planlegg hverdagsreisene med gange, sykkel eller kollektiv som førstevalg. " +
      "Korte bilturer kan ofte erstattes av en tur eller elsykkel, som også sparer tid i kø og parkering. " +
      "Når du trenger bil, vurder bildeling i stedet for å eie – spesielt i byer. " +
      "Kombiner flere ærend i én tur («trip chaining») og velg digitale møter når fysisk oppmøte ikke er nødvendig. " +
      "Sørg for godt lys og vinterdekk til sykkel for å holde det trygt og praktisk hele året.",
  },
  {
    id: "tt-003",
    slug: "spis-mer-plantebasert",
    image: "/ClimateActionImages/spis_mer_plantebasert.jpg",
    title: "Spis mer plantebasert",
    summary:
      "Bytt ut noe kjøtt med belgfrukter, korn og grønnsaker. Start med én kjøttfri dag i uka.",
    body:
      "Begynn enkelt med én plantebasert dag i uken, og bygg videre derfra. " +
      "Bytt ut deler av kjøttet i kjente retter med bønner, linser eller erter for god smak og protein. " +
      "Bruk sesonggrønnsaker og hele korn for bedre næring og lavere fotavtrykk. " +
      "Utforsk nye oppskrifter og krydder – smak er nøkkelen til vaner som varer. " +
      "Hvis du går helt over til vegansk kost, sørg for tilstrekkelig B12 etter anbefaling fra helsepersonell.",
  },
  {
    id: "tt-004",
    slug: "kutt-matsvinn",
    image: "/ClimateActionImages/kutt_matsvinn.jpg",
    title: "Kutt matsvinn",
    summary:
      "Planlegg innkjøp, bruk restemat kreativt og frys ned overskudd. Se og lukt – ikke bare dato.",
    body:
      "Lag handleliste og planlegg måltider for å unngå impulskjøp som blir liggende. " +
      "Oppbevar maten riktig (tett, kaldt og tørt der det passer), og bruk «først inn, først ut»-prinsippet i kjøleskapet. " +
      "Tolk datomerking riktig: «Best før» handler ofte om kvalitet, ikke sikkerhet. " +
      "Frys ned brød i skiver og rester i porsjoner, og gjør rester om til nye retter dagen etter. " +
      "Sjekk skapet før du handler – det sparer både penger og klimagassutslipp.",
  },
  {
    id: "tt-005",
    slug: "reparer-og-kjop-brukt",
    image: "/ClimateActionImages/reparer_og_kjop_brukt.jpg",
    title: "Reparer og kjøp brukt",
    summary:
      "Forleng levetiden på klær og elektronikk. Kjøp brukt før nytt – og selg videre det du ikke bruker.",
    body:
      "Start med en gjennomgang av det du allerede eier: kan det fikses, oppgraderes eller brukes på nytt? " +
      "Små reparasjoner (knepper, sømmer, batteribytte) forlenger levetiden betraktelig. " +
      "Kjøp brukt når du kan – kvalitet varer, og du kutter både kostnad og fotavtrykk. " +
      "Selg eller gi bort ting du ikke lenger trenger for å holde ting i sirkulasjon. " +
      "Velg produkter med mulighet for reservedeler og god garanti når du først må kjøpe nytt.",
  },
  {
    id: "tt-006",
    slug: "faerre-flyreiser",
    image: "/ClimateActionImages/faerre_flyreiser.jpg",
    title: "Færre flyreiser",
    summary:
      "Velg tog på kortere strekninger, og slå sammen turer. Når du må fly: bli lengre og reis sjeldnere.",
    body:
      "Tenk «færre, men bedre» reiser: slå sammen møter, ferier og besøk når det lar seg gjøre. " +
      "Velg tog eller buss på kortere strekninger, og vurder nattog som komfortabelt alternativ. " +
      "Når fly er nødvendig, velg direkte ruter for å redusere både tid og utslipp per reise. " +
      "Planlegg lengre opphold i stedet for mange korte turer. " +
      "Digitale møter dekker ofte behovet for oppfølging mellom fysiske treff.",
  },
  {
    id: "tt-007",
    slug: "isoler-bedre-og-vurder-varmepumpe",
    image: "/ClimateActionImages/isoler_bedre.jpg",
    title: "Isoler bedre og vurder varmepumpe",
    summary:
      "Tett trekk, oppgrader vinduer og installer varmepumpe der det passer. Store kutt i både utslipp og strømregning.",
    body:
      "Start med en enkel tettesjekk: kjenn etter trekk ved vinduer, dører og gjennomføringer, og legg inn tettelister der det trekker. " +
      "Isoler loft og kalde gulv for stor effekt per krone, og vurder energiglass eller varevinduer i trekkfulle rom. " +
      "En passende varmepumpe (luft–luft, luft–vann eller væske–vann) kan redusere strømforbruket til oppvarming betydelig. " +
      "Bruk tidsstyring og soner for å varme der og når det trengs. " +
      "Følg med på faktisk forbruk i strømmåler-appen for å se effekten av tiltakene.",
  },
  {
    id: "tt-008",
    slug: "produser-eller-kjop-gronn-strom",
    image: "/ClimateActionImages/gronn_strom.jpg",
    title: "Produser eller kjøp grønn strøm",
    summary:
      "Vurder solceller på taket, smarte styringssystemer og en strømavtale med opprinnelsesgaranti.",
    body:
      "Har du egnet tak, kan solceller dekke en betydelig del av årsforbruket over tid. " +
      "Se på takvinkel, skygge og eksisterende elektrisk anlegg for å vurdere potensialet. " +
      "Uten solceller kan du likevel påvirke: velg en strømavtale med dokumentert opprinnelsesgaranti, og bruk smarte plugger for å flytte forbruk til gunstige timer. " +
      "Varmtvannsbereder, elbillading og panelovner kan styres automatisk. " +
      "Sammen med lavere forbruk gir dette både lavere kostnader og lavere utslipp.",
  },
  {
    id: "tt-009",
    slug: "gronn-okonomi",
    image: "/ClimateActionImages/gronn_okonomi.jpg",
    title: "Grønn økonomi",
    summary:
      "Flytt sparepenger/pensjon til fond og banker med lavt karbonavtrykk. Etterspør bærekraft hos leverandører.",
    body:
      "Sjekk hvor banken og pensjonsleverandøren din investerer midlene, og vurder alternativer med tydelige klimamål og lavt karbonavtrykk. " +
      "Vær oppmerksom på kostnader, risiko og tidshorisont – gjør endringer som passer økonomien din. " +
      "Bruk forbrukermakten: velg leverandører som rapporterer åpent om utslipp og miljøtiltak. " +
      "Som kunde kan du spørre etter mer bærekraftige produkter og tjenester og påvirke etterspørselen. " +
      "Små valg i hverdagen, forsterket av hvor pengene plasseres, gir stor samlet effekt.",
  },
  {
    id: "tt-010",
    slug: "engasjer-deg-lokalt",
    image: "/ClimateActionImages/engasjer_deg_lokalt.jpg",
    title: "Engasjer deg lokalt",
    summary:
      "Delta i nabolagsprosjekter, påvirk beslutningstakere og stem grønt. Sammen får vi større effekt.",
    body:
      "Bli med i lokale initiativer som nabolagshager, byttegrupper, reparasjonskafeer og sykkelprosjekter. " +
      "Samarbeid med borettslag eller sameie om energitiltak som varmepumpe, solceller eller bedre avfallssortering. " +
      "Ta kontakt med kommunen om trygge sykkeltraséer, kollektivtilbud og grøntarealer. " +
      "Bruk stemmeretten, og engasjer deg i høringer for å påvirke planer og prioriteringer. " +
      "Når mange gjør litt – og noen få gjør mye – flytter vi sammen systemene i riktig retning.",
  },
];

export function showInfo(): Actions[] {
  return CLIMATEACTIONS;
}
