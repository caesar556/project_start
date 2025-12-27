"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";

export default function FaqContent() {
  const [faqItems, setFaqItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1628 0%, #121A2F 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {faqItems?.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={`item-${index}`}
              className="border-b border-white/10 last:border-b-0"
            >
              <AccordionTrigger className="text-left px-6 py-5 text-white hover:text-orange-400 hover:no-underline [&>svg]:text-orange-400">
                <h3 className="font-medium">{item.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-white/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Additional Europe FAQs */}
          <AccordionItem value="europe-1" className="border-b border-white/10">
            <AccordionTrigger className="text-left px-6 py-5 text-white hover:text-orange-400 hover:no-underline [&>svg]:text-orange-400">
              <h3 className="font-medium">
                Führt Richard Umzug auch internationale Umzüge durch?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-white/70">
              Ja, Richard Umzug bietet professionelle Umzüge in ganz Europa an.
              Wir führen Umzüge nach Deutschland, Schweiz, Italien, Ungarn,
              Tschechien, Slowakei und viele weitere europäische Länder durch.
              Kontaktieren Sie uns für ein individuelles Angebot für Ihren
              europaweiten Umzug.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="europe-2" className="border-b border-white/10">
            <AccordionTrigger className="text-left px-6 py-5 text-white hover:text-orange-400 hover:no-underline [&>svg]:text-orange-400">
              <h3 className="font-medium">
                In welchen Ländern ist Richard Umzug tätig?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-white/70">
              Richard Umzug ist in ganz Österreich und in über 20 europäischen
              Ländern tätig. Dazu gehören unter anderem Deutschland, Schweiz,
              Italien, Frankreich, Niederlande, Belgien, Polen, Tschechien,
              Ungarn, Slowakei, Slowenien, Kroatien und viele mehr.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="europe-3" className="border-b border-white/10">
            <AccordionTrigger className="text-left px-6 py-5 text-white hover:text-orange-400 hover:no-underline [&>svg]:text-orange-400">
              <h3 className="font-medium">
                Wie viel kostet ein Umzug in Wien?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-white/70">
              Die Kosten für einen Umzug in Wien hängen von verschiedenen
              Faktoren ab: Wohnungsgröße, Stockwerk, Entfernung und gewünschte
              Zusatzleistungen. Nutzen Sie unseren kostenlosen{" "}
              <Link
                href="/umzugskosten-rechner"
                className="text-orange-400 hover:underline"
              >
                Umzugskosten-Rechner
              </Link>{" "}
              für eine erste Schätzung oder kontaktieren Sie uns für ein
              unverbindliches Angebot.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="europe-4" className="border-b border-white/10">
            <AccordionTrigger className="text-left px-6 py-5 text-white hover:text-orange-400 hover:no-underline [&>svg]:text-orange-400">
              <h3 className="font-medium">Bieten Sie Entrümpelungen an?</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-white/70">
              Ja, Richard Umzug bietet professionelle{" "}
              <Link
                href="/entruempelung-anfragen"
                className="text-orange-400 hover:underline"
              >
                Entrümpelung und Haushaltsauflösungen
              </Link>{" "}
              in ganz Österreich und Europa an. Wir entsorgen Ihre Gegenstände
              fachgerecht und umweltfreundlich.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="europe-5" className="border-b-0">
            <AccordionTrigger className="text-left px-6 py-5 text-white hover:text-orange-400 hover:no-underline [&>svg]:text-orange-400">
              <h3 className="font-medium">
                Wie schnell bekomme ich ein Angebot?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-white/70">
              Nach Ihrer Anfrage erhalten Sie in der Regel innerhalb von 24
              Stunden ein kostenloses und unverbindliches Angebot von Richard
              Umzug. Bei dringenden Anfragen können wir oft auch schneller
              reagieren.{" "}
              <Link
                href="/umzug-anfragen"
                className="text-orange-400 hover:underline"
              >
                Jetzt Anfrage stellen
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
