import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MapPin, Phone, Shield, Star } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/constants";

//@ts-ignore 
export default function CityHero({ city }) {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0D1628 0%, #1A2642 50%, #0D1628 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,106,0,0.2) 0%, rgba(255,133,52,0.2) 100%)",
              border: "1px solid rgba(255,106,0,0.3)",
            }}
          >
            <MapPin className="h-4 w-4 text-orange-400" />
            <span className="text-orange-400 font-medium text-sm">
              Richard Umzug – {city.name}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ihr Umzug in{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FFAB00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {city.name}
            </span>{" "}
            – Schnell, zuverlässig & professionell
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4">
            {city.intro}
          </p>

          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
            style={{
              background: "rgba(255, 106, 0, 0.1)",
              border: "1px solid rgba(255, 106, 0, 0.2)",
            }}
          >
            <Globe className="h-4 w-4 text-orange-400" />
            <span className="text-white font-medium text-sm">
              Österreich & Europaweit verfügbar
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-xl border-0 shadow-lg hover:scale-[1.03] transition-transform"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                boxShadow: "0 10px 40px rgba(255, 106, 0, 0.4)",
              }}
            >
              <Link href="/umzug-anfragen" className="text-white font-bold">
                Jetzt Umzug in {city.name} anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-white/20 text-white hover:bg-white/10"
            >
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { icon: Star, label: "5.0 Bewertung" },
              { icon: Shield, label: "Vollversichert" },
              { icon: Globe, label: "Europaweit" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <badge.icon className="h-4 w-4 text-orange-400" />
                <span className="text-white text-sm font-medium">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
}
