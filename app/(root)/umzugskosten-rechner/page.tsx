import Layout from "@/components/calculator/Layout";
import {
  Globe,
  Calculator,
  Info,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/constants";

export default function UmzugskostenRechner() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D1628 0%, #1A2642 50%, #0D1628 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,106,0,0.2) 0%, rgba(255,133,52,0.2) 100%)",
              border: "1px solid rgba(255,106,0,0.3)",
            }}
          >
            <Calculator className="h-4 w-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">
              Kostenlose Kalkulation
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Umzugskosten-Rechner
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Berechnen Sie die ungefähren Kosten für Ihren Umzug in Österreich
            und Europa. Schnell, einfach und unverbindlich.
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <section
        className="border-y"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,106,0,0.05) 0%, rgba(13,22,40,0.05) 100%)",
          borderColor: "rgba(255,106,0,0.1)",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <Info className="h-5 w-5 text-orange-500 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Hinweis:</span> Die
              berechneten Kosten sind unverbindliche Schätzwerte. Für ein
              verbindliches Angebot kontaktieren Sie uns bitte direkt.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Layout />
        </div>
      </section>

      {/* Europe Info */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #0D1628 0%, #121A2F 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                background: "rgba(255, 106, 0, 0.1)",
                border: "1px solid rgba(255, 106, 0, 0.2)",
              }}
            >
              <Globe className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">
                Österreich & Europaweit
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Umzüge auch außerhalb Österreichs?
            </h2>

            <p className="text-white/70 mb-8">
              Richard Umzug führt professionelle Umzüge nicht nur innerhalb
              Österreichs, sondern auch in über 20 europäische Länder durch. Für
              internationale Umzüge erstellen wir Ihnen gerne ein individuelles
              Angebot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-xl border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                  boxShadow: "0 6px 25px rgba(255, 106, 0, 0.3)",
                }}
              >
                <Link
                  href="/umzug-anfragen"
                  className="text-white flex items-center"
                >
                  Internationales Angebot anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="rounded-xl bg-green-600 hover:bg-green-700 border-0"
              >
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
