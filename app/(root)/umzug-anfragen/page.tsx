import FormCard from "@/components/form/move-form/FormCard";
import { Globe, Shield, Clock, CheckCircle } from "lucide-react";

export default function UmzugAnfragen() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Globe className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Österreichweit & Europaweit
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Umzug anfragen – Richard Umzug
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Füllen Sie das Formular aus und erhalten Sie ein unverbindliches
            Angebot für Ihren Umzug in Österreich oder Europa.
          </p>
        </div>
      </section>

      <section className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Vollversichert</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Antwort in 24h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="h-4 w-4 text-primary" />
              <span>20+ Länder in Europa</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Ihr persönliches Umzugsangebot
              </h2>
              <p className="text-muted-foreground">
                Richard Umzug bietet professionelle Umzüge in ganz Österreich
                und europaweit an. Füllen Sie das Formular aus – wir melden uns
                innerhalb von 24 Stunden!
              </p>
            </div>
            <FormCard />
          </div>
        </div>
      </section>
    </>
  );
}
