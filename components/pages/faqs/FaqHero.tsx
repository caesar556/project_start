import { Globe } from "lucide-react";

export default function FaqHero() {
  return (
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
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
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
          <Globe className="h-4 w-4 text-orange-400" aria-hidden="true" />
          <span className="text-sm font-medium text-orange-400">
            Österreichweit & Europaweit
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Häufig gestellte Fragen
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Hier finden Sie Antworten auf die häufigsten Fragen rund um Umzüge mit
          Richard Umzug in Österreich und Europa.
        </p>
      </div>
    </section>
  );
}
