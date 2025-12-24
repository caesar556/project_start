import { COMPANY_INFO } from "@/constants";

export default function Cookie() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Cookie-Richtlinie – Richard Umzug
          </h1>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Was sind Cookies?
          </h2>
          <p className="text-muted-foreground mb-4">
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen
            Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie
            ermöglichen es der Website, Ihre Aktionen und Einstellungen (wie
            Login, Sprache, Schriftgröße und andere Anzeigeeinstellungen) über
            einen bestimmten Zeitraum zu speichern.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Über Richard Umzug
          </h2>
          <p className="text-muted-foreground mb-4">
            Richard Umzug bietet professionelle Umzüge und Entrümpelungen in
            ganz Österreich und europaweit an. Wir verwenden Cookies, um Ihnen
            ein optimales Nutzererlebnis auf unserer Website zu bieten,
            unabhängig davon, ob Sie sich für einen Umzug innerhalb Österreichs
            oder einen internationalen Umzug innerhalb Europas interessieren.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Welche Cookies verwenden wir?
          </h2>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Notwendige Cookies
          </h3>
          <p className="text-muted-foreground mb-4">
            Diese Cookies sind für den Betrieb unserer Website unbedingt
            erforderlich. Sie ermöglichen grundlegende Funktionen wie die
            Seitennavigation und den Zugang zu sicheren Bereichen der Website.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Funktionale Cookies
          </h3>
          <p className="text-muted-foreground mb-4">
            Diese Cookies ermöglichen es der Website, erweiterte Funktionalität
            und Personalisierung zu bieten. Sie können von uns oder von
            Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten
            nutzen.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Analytische Cookies
          </h3>
          <p className="text-muted-foreground mb-4">
            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer
            Website interagieren, indem sie Informationen sammeln und melden.
            Alle Informationen, die diese Cookies sammeln, sind aggregiert und
            daher anonym.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Eingesetzte Cookies im Detail
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-2 text-left text-foreground">
                    Cookie
                  </th>
                  <th className="border border-border p-2 text-left text-foreground">
                    Zweck
                  </th>
                  <th className="border border-border p-2 text-left text-foreground">
                    Dauer
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2 text-muted-foreground">
                    Session-Cookie
                  </td>
                  <td className="border border-border p-2 text-muted-foreground">
                    Sitzungsverwaltung
                  </td>
                  <td className="border border-border p-2 text-muted-foreground">
                    Sitzung
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 text-muted-foreground">
                    Cookie-Consent
                  </td>
                  <td className="border border-border p-2 text-muted-foreground">
                    Speichert Cookie-Einwilligung
                  </td>
                  <td className="border border-border p-2 text-muted-foreground">
                    1 Jahr
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Wie können Sie Cookies kontrollieren?
          </h2>
          <p className="text-muted-foreground mb-4">
            Sie können Cookies jederzeit über Ihre Browsereinstellungen
            kontrollieren und löschen. Hier finden Sie Anleitungen für die
            gängigsten Browser:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-4">
            <li>
              Chrome: Einstellungen → Datenschutz und Sicherheit → Cookies
            </li>
            <li>Firefox: Einstellungen → Datenschutz & Sicherheit → Cookies</li>
            <li>Safari: Einstellungen → Datenschutz → Cookies</li>
            <li>Edge: Einstellungen → Datenschutz → Cookies</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Auswirkungen der Cookie-Deaktivierung
          </h2>
          <p className="text-muted-foreground mb-4">
            Bitte beachten Sie, dass das Deaktivieren oder Löschen von Cookies
            die Funktionalität unserer Website beeinträchtigen kann. Einige
            Funktionen stehen Ihnen möglicherweise nicht zur Verfügung.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Kontakt
          </h2>
          <p className="text-muted-foreground mb-4">
            Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie Richard
            Umzug bitte unter:
            <br />
            E-Mail: {COMPANY_INFO.email}
            <br />
            Telefon: {COMPANY_INFO.phone}
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Stand: Dezember 2024
          </p>
        </div>
      </div>
    </section>
  );
}
