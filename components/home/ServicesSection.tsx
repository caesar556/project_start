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
  Sparkles,
  Globe,
  LucideIcon,
} from "lucide-react";

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

const services = [
  {
    id: 1,
    title: "Privatumzug",
    description: "Stressfreier Umzug für Wohnungen und Häuser jeder Größe.",
    icon: "Home",
  },
  {
    id: 2,
    title: "Firmenumzug",
    description:
      "Professionelle Büro- und Firmenumzüge mit minimaler Ausfallzeit.",
    icon: "Building2",
  },
  {
    id: 3,
    title: "Entrümpelung",
    description:
      "Schnelle und umweltgerechte Haushalts- und Kellerauflösungen.",
    icon: "Trash2",
  },
  {
    id: 4,
    title: "Verpackungsservice",
    description: "Sicheres Verpacken Ihrer Möbel und Wertgegenstände.",
    icon: "Package",
  },
  {
    id: 5,
    title: "Montage & Demontage",
    description: "Fachgerechte Möbelmontage durch erfahrene Monteure.",
    icon: "Wrench",
  },
  {
    id: 6,
    title: "Lagerung",
    description: "Sichere und flexible Lagerlösungen für Ihr Umzugsgut.",
    icon: "Warehouse",
  },
  {
    id: 7,
    title: "Event- & Spezialumzüge",
    description: "Transport von Event-Equipment und Spezialgütern.",
    icon: "Music",
  },
  {
    id: 8,
    title: "Seniorenumzüge",
    description: "Einfühlsame Unterstützung bei Umzügen im Alter.",
    icon: "Heart",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Decorative Backgrounds (DO NOT BLOCK HOVER) */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] " />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 border border-orange-500/20 bg-orange-500/10">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm uppercase">
              Richard Umzug Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Umfassende Leistungen für{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              jeden Bedarf
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Vom Privatumzug bis zur kompletten Haushaltsauflösung – wir bieten
            Ihnen den passenden Service.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border bg-muted">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Österreich & Europaweit verfügbar
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Package;

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden rounded-2xl
                  border border-red-700 
                  shadow-lg transition-all duration-500
                  hover:-translate-y-3 hover:shadow-2xl
                  will-change-transform"
              >
                <CardHeader className="pb-4 relative z-10">
                  <div
                    className="
                    w-16 h-16 mb-6 rounded-2xl
                    flex items-center justify-center
                    bg-orange-500/10
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                  >
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>

                  <CardTitle
                    className="
                    text-xl font-bold
                    transition-colors duration-300
                    group-hover:text-orange-500
                  "
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-[15px]">
                    {service.description}
                  </CardDescription>

                  <div
                    className="
                    mt-5 flex items-center gap-1
                    text-orange-500 font-semibold text-sm
                    opacity-0 translate-y-1
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-y-0
                  "
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-xl"
          >
            <Link href="/leistungen">
              Alle Leistungen entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
