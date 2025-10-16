import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Klimakampen – Enkel vei til lavere CO₂",
  description: "Nettsted som inspirerer til konkrete klimatiltak i hverdagen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={montserrat.className}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
