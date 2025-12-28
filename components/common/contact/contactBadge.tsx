import { Check, Clock, Shield, Star } from "lucide-react";

export default function ContactBadge() {
  return (
    <div className="text-center lg:text-left">
      <div className="inline-flex items-center justify-center mb-6">
        <div className="relative">
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
              boxShadow: "0 15px 50px rgba(220, 38, 38, 0.35)",
            }}
          >
            <span className="text-3xl md:text-4xl font-bold text-white">
              50 €
            </span>
            <span className="text-sm md:text-base font-semibold text-white/90">
              *RABATT
            </span>
          </div>
          <div
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              boxShadow: "0 4px 15px rgba(255, 106, 0, 0.4)",
            }}
          >
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Jetzt Anfrage starten!
      </h2>
      <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2">
        <Clock className="w-6 h-6" />
        In 8 Std. kostenloses Angebot erhalten
      </p>

      <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield className="w-5 h-5 text-orange-500" />
          <span className="text-sm">100% Unverbindlich</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Check className="w-5 h-5 text-orange-500" />
          <span className="text-sm">Kostenlose Beratung</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic">
        *Sie erhalten 50 € Rabatt, wenn Sie das kostenlose Umzugsformular
        ausfüllen.
      </p>
    </div>
  );
}
