import { Globe, Route } from "lucide-react";

export default function CitiesHead() {
  return (
    <div className="text-center mb-16">
      <div
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,22,40,0.1), rgba(26,38,66,0.1))",
          border: "1px solid rgba(13,22,40,0.15)",
        }}
      >
        <Route className="h-4 w-4 text-primary" />
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Richard Umzug Standorte
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
        Umzüge in{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #FF6A00, #FF8534)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Österreich & Europa
        </span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
        Von Wien bis Bregenz und in ganz Europa – Richard Umzug ist Ihr
        verlässlicher Partner für Umzüge.
      </p>

      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,106,0,0.1), rgba(255,133,52,0.1))",
          border: "1px solid rgba(255,106,0,0.2)",
        }}
      >
        <Globe className="h-4 w-4 text-orange-500" />
        <span className="text-orange-500 font-medium text-sm">
          Österreichweit & Europaweit
        </span>
      </div>
    </div>
  );
}
