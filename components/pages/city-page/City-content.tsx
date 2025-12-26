import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/constants";
import {
  ArrowRight,
  Globe,
  HelpCircle,
  MessageCircle,
  Truck,
} from "lucide-react";
import Link from "next/link";
//@ts-ignore 
export default function CityContent({ city }) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* About Section */}
          <div className="mb-16">
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Richard Umzug – Ihr Partner
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Umzüge in {city.name} – Österreichweit & Europaweit
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {city.details}
            </p>

            {city.distance_km > 0 && (
              <div
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,106,0,0.05) 0%, rgba(13,22,40,0.05) 100%)",
                  border: "1px solid rgba(255,106,0,0.2)",
                }}
              >
                <Truck className="h-5 w-5 text-orange-500" />
                <span className="text-foreground">
                  Entfernung von Wien: <strong>{city.distance} km</strong>
                </span>
              </div>
            )}
          </div>
          price range
          {/* Services */}
          {/* City FAQs */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255, 106, 0, 0.15)" }}
              >
                <HelpCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Häufige Fragen zu Umzügen in {city.name}
              </h2>
            </div>
            faqs 
          {/* CTA */}
          <Card
            className="border-0 shadow-xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0D1628 0%, #1A2642 100%)",
            }}
          >
            <CardContent className="p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Jetzt Umzug in {city.name} anfragen
              </h3>
              <p className="text-white/70 mb-4 max-w-xl mx-auto">
                Kontaktieren Sie uns für ein unverbindliches Angebot – in{" "}
                {city.name}, ganz Österreich und europaweit!
              </p>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
                style={{
                  background: "rgba(255, 106, 0, 0.1)",
                  border: "1px solid rgba(255, 106, 0, 0.2)",
                }}
              >
                <Globe className="h-4 w-4 text-orange-400" />
                <span className="text-white text-sm font-medium">
                  Umzüge in Österreich & Europa
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                    boxShadow: "0 10px 40px rgba(255, 106, 0, 0.4)",
                  }}
                >
                  <Link href="/umzug-anfragen" className="text-white font-bold">
                    Kostenlos anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                    className="text-white"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Other Cities */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Weitere Standorte von Richard Umzug
            </h3>
            <div className="flex flex-wrap gap-3">
              {cities
                ?.filter((c) => c.id !== city.id)
                .map((c) => (
                  <Link
                    key={c.id}
                    href={`/${c.slug}`}
                    className="px-4 py-2 bg-card border border-border rounded-xl text-sm font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
