import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function FaqCta({ phone }: { phone?: string }) {
  return (
    <div
      className="mt-12 rounded-2xl p-8 text-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(13,22,40,0.2) 100%)",
        border: "1px solid rgba(255,106,0,0.2)",
      }}
    >
      <h2 className="text-2xl font-bold text-foreground mb-3">
        Haben Sie weitere Fragen?
      </h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
        Das Team von Richard Umzug ist für Sie da und beantwortet gerne alle
        Ihre Fragen zu nationalen und internationalen Umzügen.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="rounded-xl border-0"
          style={{
            background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
            boxShadow: "0 6px 25px rgba(255, 106, 0, 0.3)",
          }}
        >
          <a href={`tel:${phone || "004368120697499"}`} className="text-white">
            <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
            Jetzt anrufen
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-xl border-orange-500/30 text-foreground hover:bg-orange-500/10"
        >
          <Link href="/umzug-anfragen">
            Umzug anfragen
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
