import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

export default function CityPrice({
  name,
  minPrice,
  maxPrice,
}: {
  name: string;
  minPrice: number;
  maxPrice: number;
}) {
  return (
    <div className="lg:col-span-2">
      <Card
        className="border-0 shadow-xl overflow-hidden h-full"
        style={{
          background: "linear-gradient(135deg, #0D1628 0%, #121A2F 100%)",
        }}
      >
        <div
          className="p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              }}
            >
              <Calculator className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Umzugskosten Wien → {name}
              </h3>
              <p className="text-white/60">Geschätzter Preisrahmen</p>
            </div>
          </div>
          <p
            className="text-4xl font-extrabold text-center mb-2"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FFAB00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {minPrice.toLocaleString("de-AT")}€ –{" "}
            {maxPrice.toLocaleString("de-AT")}€
          </p>
          <p className="text-sm text-white/50 text-center mb-6">
            Je nach Wohnungsgröße und Zusatzleistungen
          </p>
          <Button
            asChild
            className="w-full rounded-xl border-0"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
            }}
          >
            <Link href="/umzugskosten-rechner" className="text-white">
              Genaue Kosten berechnen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
