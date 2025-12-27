import FormClear from "@/components/form/clear-form/FormClear";
import { Globe, Shield, Clock, CheckCircle, Trash2 } from "lucide-react";

export default function EntruempelungAnfragen() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Trash2 className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Österreichweit verfügbar
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Entrümpelung anfragen – Richard Umzug
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Professionelle Entrümpelung und Haushaltsauflösung in ganz
            Österreich. Schnell, gründlich und umweltgerecht.
          </p>
        </div>
      </section>

      <section className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Fachgerechte Entsorgung</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Schnelle Termine</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Besenreine Übergabe</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="h-4 w-4 text-primary" />
              <span>In ganz Österreich</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-4 text-center">
              Unsere Entrümpelungsleistungen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Haushaltsauflösung
                </h3>
                <p className="text-sm text-muted-foreground">
                  Komplette Auflösung von Wohnungen und Häusern
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Kellerentrümpelung
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professionelle Räumung von Kellern und Dachböden
                </p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  Sperrmüllentsorgung
                </h3>
                <p className="text-sm text-muted-foreground">
                  Umweltgerechte Entsorgung aller Gegenstände
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Jetzt Entrümpelung anfragen
              </h2>
              <p className="text-muted-foreground">
                Richard Umzug bietet professionelle Entrümpelung in ganz
                Österreich. Füllen Sie das Formular aus – wir erstellen Ihnen
                ein kostenloses Angebot!
              </p>
            </div>
            <FormClear />
          </div>
        </div>
      </section>
    </>
  );
}
