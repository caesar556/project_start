"use client"; 
import Link from "next/link";
import { MapPin, ArrowRight, Truck, Users, Route, Globe } from "lucide-react";
import { CitiesCta, CitiesHead } from "@/components/common";
import { useCities } from "@/hooks/useData";

export default function CitiesSection() {
  const { cities } = useCities();
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <CitiesHead />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {cities.map((city, index) => (
            <Link
              key={city._id}
              href={`/${city.slug}`}
              className="group relative flex flex-col items-center p-6 bg-background rounded-2xl border hover:border-orange-500/40 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,106,0,0.1), rgba(13,22,40,0.1))",
                  }}
                >
                  <MapPin className="h-7 w-7 text-orange-500" />
                </div>

                <span className="font-bold block text-center mb-1">
                  {city.name}
                </span>

                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                  {city.distance > 0 ? `${city.distance} km` : "Lokal"}
                </span>
              </div>

              <ArrowRight className="absolute bottom-3 right-3 h-4 w-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>

        <div
          className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D1628, #1A2642, #0D1628)",
          }}
        >
          <div className="relative z-10 grid md:grid-cols-4 gap-10 text-center">
            {[
              {
                icon: Truck,
                value: `${cities.length}+`,
                label: "Städte in Österreich",
              },
              { icon: Globe, value: "20+", label: "Länder in Europa" },
              { icon: Route, value: "640 km", label: "Maximale Entfernung" },
              { icon: Users, value: "1000+", label: "Erfolgreiche Umzüge" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <stat.icon className="h-9 w-9 text-white" />
                </div>
                <p className="text-5xl font-extrabold mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <CitiesCta />
      </div>
    </section>
  );
}
