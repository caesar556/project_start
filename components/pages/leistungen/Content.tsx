import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  Trash2,
  Package,
  Wrench,
  Warehouse,
  Music,
  Heart,
  ArrowRight,
  Check,
  LucideIcon,
} from "lucide-react";
import { getServices } from "@/lib/services/services";

type Service = {
  _id: string;
  title: string;
  description: string;
  icon: string;
};

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Trash2,
  Package,
  Wrench,
  Warehouse,
  Music,
  Heart,
};

const defaultFeatures = [
  "Professionelle Planung & Durchführung",
  "Versicherter Transport",
  "Erfahrenes Fachpersonal",
  "Flexible Terminvereinbarung",
  "Österreich & Europaweit",
];

const serviceDetails: Record<
  string,
  { features: string[]; longDescription: string }
> = {
  privatumzug: {
    longDescription:
      "Umzug – sicher, pünktlich & europaweit. Ob innerhalb Österreichs oder in ein anderes EU-Land: Wir organisieren Ihren Umzug professionell und stressfrei.",
    features: [
      "Privatumzug (Wohnung / Haus)",
      "Planung + Zeitfenster nach Wunsch",
      "Tragen, Transport, Be- und Entladen",
      "Möbelmontage / Demontage",
      "Verpackungsservice (optional)",
      "Halteverbotszone Organisation (optional)",
      "Transparente Preise & erfahrenes Team",
    ],
  },

  firmenumzug: {
    longDescription:
      "Firmenumzüge erfordern Präzision und Erfahrung. Wir sorgen für einen reibungslosen Ablauf – auch außerhalb der Geschäftszeiten – in Österreich und europaweit.",
    features: [
      "Firmenumzug (Büro / Geschäft)",
      "Minimale Betriebsunterbrechung",
      "Sichere IT- & Büroausstattung",
      "Individuelle Projektplanung",
      "Flexible Termine – auch kurzfristig",
      "Europaweiter Transport",
    ],
  },

  entrumpelung: {
    longDescription:
      "Entrümpelung und Entsorgung vom Profi. Schnell, sauber und zuverlässig – inklusive besenreiner Übergabe nach Absprache.",
    features: [
      "Trage- und Demontagearbeiten",
      "Abtransport / Entsorgung (nach Absprache)",
      "Haushaltsauflösungen",
      "Keller- & Dachbodenräumung",
      "Besenreine Übergabe",
      "Optional: Reinigung & kleine Reparaturen",
    ],
  },
};

const normalizeKey = (title: string) =>
  title.toLowerCase().replace("ü", "u").replace("ö", "o").replace("ä", "a");

export default async function Header() {
  const services: Service[] = await getServices();
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-12">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Package;
          const key = normalizeKey(service.title);
          const details = serviceDetails[key];
          const features = details?.features || defaultFeatures;
          const isEntruempelung = key.includes("entrumpel");

          return (
            <Card
              key={service._id}
              className="overflow-hidden rounded-2xl border border-orange-400 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div
                  className="md:w-1/3 flex items-center justify-center p-8"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,106,0,0.05), rgba(13,22,40,0.05))",
                  }}
                >
                  <div className="relative">
                    <Icon className="h-24 w-24 text-orange-500" />
                    <div
                      className="absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                      }}
                    >
                      AT & EU
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {details?.longDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-orange-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="rounded-xl border-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                        }}
                      >
                        <Link
                          href={
                            isEntruempelung
                              ? "/entruempelung-anfragen"
                              : "/umzug-anfragen"
                          }
                          className="text-white"
                        >
                          Jetzt anfragen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>

                      <Button asChild variant="outline" className="rounded-xl">
                        <Link href="/kontakt">Beratung anfordern</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
