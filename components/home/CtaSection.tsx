import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function CTASection() {
  const phone = "004368120697499";

  const benefits = [
    "Kostenlose Beratung",
    "Unverbindliches Angebot",
    "Österreichweit & Europaweit",
    "Schnelle Reaktion",
  ];

  const formattedPhone = `+${phone.replace(/^00/, "")}`;

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0D1628 0%, #1A2642 50%, #0D1628 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-10">
            <Sparkles className="h-4 w-4 text-orange-400" />
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Richard Umzug
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            Bereit für Ihren <br className="hidden sm:block" />
            <span
              style={{
                background: "linear-gradient(90deg, #FF6A00 0%, #FF8534 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              stressfreien Umzug?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Richard Umzug – Ihr Partner für Umzüge und Entrümpelungen in
            <span className="text-white font-semibold">
              {" "}
              Österreich & ganz Europa
            </span>
          </p>

          {/* Europe badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-10 bg-orange-500/20 border border-orange-500/30">
            <Globe className="h-5 w-5 text-orange-400" />
            <span className="text-white font-medium">
              Österreich & Europaweit
            </span>
          </div>

          {/* Benefits */}
          <div className="flex w-full flex-wrap justify-center  gap-4 mb-12">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
              >
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="text-md rounded-lg  shadow-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white"
            >
              <Link href="/umzug-anfragen">
                Umzug anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-md rounded-xl  border-white/30 text-white hover:bg-white/10"
            >
              <a href={`tel:${phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>

          {/* Phone Card */}
          <div className="inline-flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-10 py-6">
            <div className="flex items-center gap-2 text-white/60">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Oder rufen Sie uns direkt an:</span>
            </div>

            <a
              href={`tel:${phone}`}
              className="text-3xl md:text-4xl font-extrabold text-white hover:text-orange-400 transition-colors"
            >
              {formattedPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
