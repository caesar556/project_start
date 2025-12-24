import { Skeleton } from "@/components/ui/skeleton";

export default function Impressum() {
  const isLoading = true;
  const companyName = "Richard Umzug";
  const street = "Alxingergasse";
  const zip = "1100";
  const city = "Wien";
  const phone = "004368120697499";
  const email = "Info@RichardUmzug.at";

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Impressum – {companyName}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Rechtliche Informationen gemäß österreichischem Recht
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Angaben gemäß § 5 ECG
            </h2>
            {isLoading ? (
              <Skeleton className="h-20 w-full mb-4" />
            ) : (
              <p className="text-muted-foreground mb-4">
                {companyName}
                <br />
                {street}
                <br />
                {zip} {city}
                <br />
                Österreich
              </p>
            )}

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Kontakt
            </h2>
            {isLoading ? (
              <Skeleton className="h-12 w-full mb-4" />
            ) : (
              <p className="text-muted-foreground mb-4">
                Telefon: {phone}
                <br />
                E-Mail: {email}
              </p>
            )}

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Unternehmensgegenstand
            </h2>
            <p className="text-muted-foreground mb-4">
              Umzugsdienstleistungen, Transporte und Entrümpelungen in
              Österreich und europaweit.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Servicegebiet
            </h2>
            <p className="text-muted-foreground mb-4">
              {companyName} bietet professionelle Umzüge und Entrümpelungen in
              ganz Österreich sowie in über 20 europäischen Ländern an. Unser
              Servicegebiet umfasst unter anderem Deutschland, Schweiz, Italien,
              Frankreich, Niederlande, Belgien, Polen, Tschechien, Ungarn,
              Slowakei, Slowenien und Kroatien.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Gewerbeberechtigung
            </h2>
            <p className="text-muted-foreground mb-4">
              Umzugsdienstleistungen und Transportwesen
              <br />
              Gewerbebehörde: Magistrat der Stadt Wien
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Umsatzsteuer-ID
            </h2>
            <p className="text-muted-foreground mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              ATU12345678
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Firmenbuchnummer
            </h2>
            <p className="text-muted-foreground mb-4">
              FN 123456x
              <br />
              Firmenbuchgericht: Handelsgericht Wien
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Streitschlichtung
            </h2>
            <p className="text-muted-foreground mb-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {" "}
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-muted-foreground mb-4">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Haftung für Inhalte
            </h2>
            <p className="text-muted-foreground mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 ECG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 ECG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Haftung für Links
            </h2>
            <p className="text-muted-foreground mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Urheberrecht
            </h2>
            <p className="text-muted-foreground mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Stand: Dezember 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
