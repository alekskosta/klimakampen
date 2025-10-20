README fra Aleksander Kostopoulos fra linje 42

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Readme Fra Aleksander Kostopoulos

title: "Klimakampen – Enkel vei til lavere CO₂"
Laget av Aleksander Kostopoulos

Klimakampen er en interaktiv webapplikasjon som gjør det enkelt å utforske klimaavtrykk og klimatiltak.

Start prosjektet med å skrive "npm install".

Link til deployed versjon netlify: https://klima-kampen.netlify.app/

Dette prosjektet kjører på React, Next.js, bruker TypeScript, Tailwind og Zustand.
Importerer grafer og tabeller fra [Shadcn.com](https://ui.shadcn.com/)

Siden er i hovedsak skrevet med css i global og moduler.
Tailwind er kun brukt der shadcn trenger det. Ellers har jeg fjernet så mye jeg kunne uten at elementene ble ødelagt.

Versjonskontroll med git og github.
Har laget egne brancher for de forskjellige sidene og oppgavene som skal gjøres før jeg så har merget inn i en dev-branch.
Når alt har fungert, har jeg merget videre til main.

Repoet: https://github.com/alekskosta/klimakampen

Mappestruktur:

.
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── globals.css
│ ├── klimatiltak/
│ │ ├── page.tsx
│ │ └── [slug]/
│ │ ├── page.tsx
│ │ └── page.module.css
│ ├── klima-verstinger/
│ │ └── page.tsx
│ └── klimakalkulator/
│ └── page.tsx
│
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Header.module.css
│ │ ├── Footer.tsx
│ │ └── Footer.module.css
│ ├── sections/
│ │ ├── HeroSection.tsx
│ │ └── HeroSection.module.css
│ ├── effects/
│ │ └── MouseTrail.tsx
│ ├── cards/
│ │ ├── ClimateActionCard.tsx
│ │ ├── ClimateActionCard.module.css
│ │ ├── CalculatorWelcomeCard.tsx
│ │ ├── CalculatorWelcomeCard.module.css
│ │ ├── CalculatorResultCard.tsx
│ │ └── CalculatorResultCard.module.css
│ ├── emissions/
│ │ ├── CO2PerPersonTable.tsx
│ │ ├── CO2PerPersonTable.module.css
│ │ ├── Co2PerPersonChart.tsx
│ │ ├── Co2PerPersonChart.module.css
│ │ ├── CalculatorResultTable.tsx
│ │ ├── CalculatorResultTable.module.css
│ │ └── Switcher.tsx  
│ ├── calculator/
│ │ ├── Calculator.tsx
│ │ └── Calculator.module.css
│ └── ui/
│ ├── chart.tsx
│ └── table.tsx
│
├── data/
│ └── info.ts
│
├── lib/
│ ├── utils.ts
│ └── calculator/
│ ├── climateCalc.ts
│ ├── storage.ts
│ └── hooks.ts
│
├── public/
│ ├── ClimateImage/
│ │ ├── blue.png
│ │ ├── coldThree.png
│ │ └── warmthThreeFour.png
│ └── ClimateActionImages/
│ ├── spar_strom_hjemme.jpg
│ ├── reis_gront_i_hverdagen.jpg
│ ├── spis_mer_plantebasert.jpg
│ ├── kutt_matsvinn.jpg
│ ├── reparer_og_kjop_brukt.jpg
│ ├── faerre_flyreiser.jpg
│ ├── isoler_bedre.jpg
│ ├── gronn_strom.jpg
│ ├── gronn_okonomi.jpg
│ └── engasjer_deg_lokalt.jpg

Alle dekorative elementer er plassert i <img> tagg, mens vanlige bilder har fått <Image> tagg for å gjøre det lettere å skille hva som er hva.

De dekorative bildene ble først plassert i <main> inne i layout.tsx. De fungerte ikke helt som jeg ønsket, så de ble derfor gjentatt som egne elementer på de respektive sidene til tross for at jeg gjentar meg.

absolutt-klassene deres er gjentatt flere steder i module og global. Dette fordi det er små forandringer der og enklest for meg å lese om jeg har dem begge steder. Selv om dette ikke er "best practise".

Jeg gjentar meg selv også med feks underlinje på titler både i module og global. Dette er også fordi det er per dags dato er enklere for meg å ha oversikt slik.

Jeg har brukt notfound() for next sin standard 404-side ved feil både på sidene og ved dynamisk routing.
