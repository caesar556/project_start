import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO } from "@/constants";
import { ArrowRight, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CityCta({ name }: { name: string }) {
  return (
    <Card
      className="border-0 shadow-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1628 0%, #1A2642 100%)",
      }}
    >
      <CardContent className="p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Jetzt Umzug in {name} anfragen
        </h3>
        <p className="text-white/70 mb-4 max-w-xl mx-auto">
          Kontaktieren Sie uns für ein unverbindliches Angebot – in {name}, ganz
          Österreich und europaweit!
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
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
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
  );
}
