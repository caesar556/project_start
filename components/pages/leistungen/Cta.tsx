import { MapPin } from "lucide-react";

export default function Cta() {
  return (
    <section
      className="border-y"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,106,0,0.05) 0%, rgba(13,22,40,0.05) 100%)",
        borderColor: "rgba(255,106,0,0.1)",
      }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center lg:flex-row items-center lg:justify-around gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(13,22,40,0.1) 100%)",
              }}
            >
              <MapPin className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Österreich & Europa
              </p>
              <p className="text-sm text-muted-foreground">
                Alle Leistungen verfügbar
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-border" />
          <p className="text-muted-foreground max-w-xl">
            Richard Umzug bietet alle Dienstleistungen in ganz Österreich sowie
            in über 20 europäischen Ländern an. Kontaktieren Sie uns für Ihr
            individuelles Angebot!
          </p>
        </div>
      </div>
    </section>
  );
}
