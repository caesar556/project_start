import { Metadata } from "next";
import { Header, Content, Cta } from "@/components/pages/leistungen";

export const metadata: Metadata = {
  title:
    "Umzugsleistungen Wien & Österreich | Privatumzug, Firmenumzug – Richard Umzug",
  description:
    "Alle Umzugsleistungen von Richard Umzug: Privatumzug, Firmenumzug, Entrümpelung, Möbelmontage, Klaviertransport. Österreich & Europaweit.",
  alternates: {
    canonical: "https://richardumzug.at/leistungen",
  },
};

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <Cta />
      <Content />
    </>
  );
}
