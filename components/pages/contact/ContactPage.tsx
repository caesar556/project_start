import ContactForm from "@/components/form/contact-form/contactForm";
import ContactInfo from "@/components/layout/ContactInfo";
import { Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <>
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
            Kontaktieren Sie Richard Umzug
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Haben Sie Fragen zu Ihrem Umzug in Österreich oder Europa? Wir sind
            für Sie da!
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Kontaktdaten
              </h2>
              <p className="text-muted-foreground mb-8">
                Wir bieten professionelle Umzüge und Entrümpelungen in ganz
                Österreich und europaweit an. Kontaktieren Sie uns für ein
                kostenloses Angebot!
              </p>
              Info contact
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
