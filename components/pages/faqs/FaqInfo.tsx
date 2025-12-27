import { Globe } from "lucide-react";

export default function faqInfo() {
  return (
    <div
      className="rounded-2xl p-6 mb-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,106,0,0.05) 0%, rgba(13,22,40,0.1) 100%)",
        border: "1px solid rgba(255,106,0,0.2)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(255, 106, 0, 0.15)" }}
        >
          <Globe className="h-7 w-7 text-orange-500" aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-bold text-foreground mb-2 text-lg">
            Richard Umzug – Ihr Partner für Umzüge in Österreich & Europa
          </h2>
          <p className="text-muted-foreground">
            Wir führen professionelle Umzüge und Entrümpelungen nicht nur in
            ganz Österreich, sondern auch europaweit durch. Egal ob Wien,
            Salzburg, München, Zürich oder andere europäische Städte – wir sind
            für Sie da!
          </p>
        </div>
      </div>
    </div>
  );
}
