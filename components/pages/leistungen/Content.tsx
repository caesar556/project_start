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

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  { id: 1, title: "Privatumzug", description: "", icon: "Home" },
  { id: 2, title: "Firmenumzug", description: "", icon: "Building2" },
  { id: 3, title: "Entrümpelung", description: "", icon: "Trash2" },
  { id: 4, title: "Verpackungsservice", description: "", icon: "Package" },
  { id: 5, title: "Möbelmontage", description: "", icon: "Wrench" },
  { id: 6, title: "Lagerung", description: "", icon: "Warehouse" },
  { id: 7, title: "Klaviertransport", description: "", icon: "Music" },
  { id: 8, title: "Seniorenumzug", description: "", icon: "Heart" },
];

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
    features: [
      "Kompletter Umzugsservice von A bis Z",
      "Professionelle Verpackung",
      "Möbelmontage auf Wunsch",
      "Moderne & sichere LKWs",
      "Europaweiter Transport",
    ],
    longDescription:
      "Unser Privatumzugsservice übernimmt Ihren gesamten Umzug – stressfrei, sicher und professionell in Österreich und Europa.",
  },
  firmenumzug: {
    features: [
      "Umzüge außerhalb der Geschäftszeiten",
      "IT- & Büroausstattung sicher transportiert",
      "Minimale Betriebsunterbrechung",
      "Erfahrene Projektplanung",
      "Europaweite Firmenumzüge",
    ],
    longDescription:
      "Bei Firmenumzügen zählt Präzision. Richard Umzug sorgt für einen reibungslosen Ablauf ohne Ausfallzeiten.",
  },
  entrümpelung: {
    features: [
      "Haushaltsauflösungen",
      "Keller- & Dachbodenräumung",
      "Fachgerechte Entsorgung",
      "Besenreine Übergabe",
      "Schnelle Terminvergabe",
    ],
    longDescription:
      "Entrümpelung vom Profi – schnell, sauber und umweltgerecht in ganz Österreich.",
  },
};

const normalizeKey = (title: string) =>
  title.toLowerCase().replace("ü", "u").replace("ö", "o").replace("ä", "a");

export default function Header() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 space-y-12">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Package;
          const key = normalizeKey(service.title);
          const details = serviceDetails[key];
          const features = details?.features || defaultFeatures;
          const isEntruempelung = key.includes("entrumpel");

          return (
            <Card
              key={service.id}
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
