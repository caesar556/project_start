import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReviewsCta() {
  return (
    <div className="mt-16 mb-14">
      <Card className="bg-orange-700/10 border-none">
        <CardContent className="pt-8 pb-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Werden Sie unser nächster zufriedener Kunde!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Richard Umzug steht für Qualität, Zuverlässigkeit und
            Kundenzufriedenheit – in ganz Österreich und europaweit. Fordern Sie
            jetzt Ihr kostenloses Angebot an!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="bg-orange-400 rounded-lg shadow-lg text-white"
              href="/umzug-anfragen"
              passHref
            >
              <Button size="lg">
                Jetzt Angebot anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link
              className="border border-gray-400  rounded-lg shadow-lg"
              href="/kontakt"
              passHref
            >
              <Button variant="outline" size="lg">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
