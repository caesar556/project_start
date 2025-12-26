import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Award,
  Truck,
  Shield,
  Clock,
  Heart,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo.jpeg";

export default function UeberUns() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Über Richard Umzug
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Ihr zuverlässiger Partner für Umzüge und Entrümpelungen in ganz
            Österreich und Europa seit über 10 Jahren.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mt-6">
            <Globe className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground font-medium text-sm">
              Österreichweit & Europaweit
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src={logo}
                alt="Richard Umzug Logo - Umzugsunternehmen Österreich Europa"
                className="w-64 h-auto rounded-xl shadow-lg mx-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Wer wir sind – Richard Umzug
              </h2>
              <p className="text-muted-foreground mb-4">
                Richard Umzug ist Ihr vertrauenswürdiger Umzugspartner in
                Österreich und ganz Europa. Seit über einem Jahrzehnt helfen wir
                Privatpersonen und Unternehmen bei Umzügen jeder Größe – von der
                kleinen Wohnung bis zum kompletten Firmenumzug, von Wien bis
                nach ganz Europa.
              </p>
              <p className="text-muted-foreground mb-4">
                Unser Team aus erfahrenen Umzugsprofis behandelt Ihre Möbel und
                persönlichen Gegenstände mit größter Sorgfalt. Wir verstehen,
                dass ein Umzug mehr als nur das Transportieren von Gegenständen
                ist – es geht um den Beginn eines neuen Lebensabschnitts.
              </p>
              <p className="text-muted-foreground mb-6">
                Mit modernster Ausrüstung, versicherten Transporten und einem
                kundenorientierten Service machen wir Ihren Umzug so stressfrei
                wie möglich – in Österreich und europaweit.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Europaweiter Service
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Umzüge in alle EU-Länder und darüber hinaus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Unser Servicegebiet
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Richard Umzug bietet professionelle Umzüge und Entrümpelungen in
                ganz Österreich sowie europaweit an.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Österreichweit
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Alle 9 Bundesländer: Wien, Niederösterreich, Oberösterreich,
                    Salzburg, Tirol, Vorarlberg, Kärnten, Steiermark und
                    Burgenland.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />{" "}
                      Vollversicherter Transport
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" /> Pünktliche
                      Lieferung
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Europaweit
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Deutschland, Schweiz, Italien, Ungarn, Tschechien, Slowakei,
                    Slowenien, Kroatien und alle weiteren EU-Länder.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-accent" /> Internationale
                      Logistik
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" /> Zollabwicklung
                      inklusive
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Zuverlässigkeit",
                description:
                  "Wir halten unsere Versprechen und liefern stets pünktlich – in Österreich und Europa.",
              },
              {
                icon: Heart,
                title: "Sorgfalt",
                description:
                  "Ihre Gegenstände werden mit größter Vorsicht behandelt.",
              },
              {
                icon: Award,
                title: "Qualität",
                description: "Professioneller Service auf höchstem Niveau.",
              },
              {
                icon: Users,
                title: "Erfahrung",
                description:
                  "Über 1000 erfolgreiche Umzüge in Österreich und Europa durchgeführt.",
              },
              {
                icon: Truck,
                title: "Moderne Ausstattung",
                description:
                  "Moderne LKWs und professionelle Ausrüstung für nationale und internationale Umzüge.",
              },
              {
                icon: Globe,
                title: "Europaweit",
                description:
                  "Umzüge in alle Länder Europas – professionell organisiert.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Jahre Erfahrung" },
              { number: "1000+", label: "Umzüge durchgeführt" },
              { number: "20+", label: "Länder in Europa" },
              { number: "24h", label: "Erreichbarkeit" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Bereit für Ihren Umzug mit Richard Umzug?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein kostenloses Angebot – in Österreich und
            europaweit!
          </p>
          <Link href="/umzug-anfragen" passHref>
            <Button size="lg">
              Jetzt Angebot anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
