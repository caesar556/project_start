import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroCta() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
      <Button
        asChild
        size="lg"
        className="px-10 py-6 font-bold rounded-xl text-white"
        style={{
          background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
        }}
      >
        <Link href="/umzug-anfragen">
          Umzugsangebot anfordern
          <ArrowRight className="ml-2 h-5 w-5 inline-block" />
        </Link>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="px-10 py-6 rounded-xl text-white"
      >
        <Link href="/umzugskosten-rechner">Kosten berechnen</Link>
      </Button>
    </div>
  );
}
