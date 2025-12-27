import { Globe, Sparkles } from "lucide-react";

export default function ServicesHead() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 border border-orange-500/20 bg-orange-500/10">
        <Sparkles className="h-4 w-4 text-orange-500" />
        <span className="text-orange-500 font-semibold text-sm uppercase">
          Richard Umzug Services
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
        Umfassende Leistungen für{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
          jeden Bedarf
        </span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
        Vom Privatumzug bis zur kompletten Haushaltsauflösung – wir bieten Ihnen
        den passenden Service.
      </p>

      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border bg-muted">
        <Globe className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">
          Österreich & Europaweit verfügbar
        </span>
      </div>
    </div>
  );
}
