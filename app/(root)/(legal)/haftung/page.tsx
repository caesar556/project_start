import { COMPANY_INFO } from "@/constants";

export default function Haftungsausschluss() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Haftungsausschluss – Richard Umzug
          </h1>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            1. Inhalt des Onlineangebotes
          </h2>
          <p className="text-muted-foreground mb-4">
            Richard Umzug übernimmt keinerlei Gewähr für die Aktualität,
            Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
            Informationen. Haftungsansprüche gegen Richard Umzug, welche sich
            auf Schäden materieller oder ideeller Art beziehen, die durch die
            Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
            die Nutzung fehlerhafter und unvollständiger Informationen
            verursacht wurden, sind grundsätzlich ausgeschlossen.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. Servicegebiet
          </h2>
          <p className="text-muted-foreground mb-4">
            Richard Umzug bietet Umzugs- und Entrümpelungsdienstleistungen in
            ganz Österreich sowie europaweit an. Die auf dieser Website
            genannten Preise und Leistungen können je nach Zielland und
            individuellen Anforderungen variieren. Für verbindliche Angebote
            kontaktieren Sie uns bitte direkt.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            3. Verweise und Links
          </h2>
          <p className="text-muted-foreground mb-4">
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            ("Hyperlinks"), die außerhalb des Verantwortungsbereiches von
            Richard Umzug liegen, würde eine Haftungsverpflichtung
            ausschließlich in dem Fall in Kraft treten, in dem Richard Umzug von
            den Inhalten Kenntnis hat und es technisch möglich und zumutbar
            wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
          </p>
          <p className="text-muted-foreground mb-4">
            Richard Umzug erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
            Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
            erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die
            Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat
            Richard Umzug keinerlei Einfluss.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            4. Urheber- und Kennzeichenrecht
          </h2>
          <p className="text-muted-foreground mb-4">
            Richard Umzug ist bestrebt, in allen Publikationen die Urheberrechte
            der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und
            Texte zu beachten, von Richard Umzug selbst erstellte Bilder,
            Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf
            lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte
            zurückzugreifen.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            5. Rechtswirksamkeit
          </h2>
          <p className="text-muted-foreground mb-4">
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
            betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern
            Teile oder einzelne Formulierungen dieses Textes der geltenden
            Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
            sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt
            und ihrer Gültigkeit davon unberührt.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            6. Kostenrechner Haftungsausschluss
          </h2>
          <p className="text-muted-foreground mb-4">
            Die durch unseren Umzugskosten-Rechner ermittelten Preise sind
            unverbindliche Schätzwerte und dienen lediglich zur Orientierung.
            Der tatsächliche Preis kann je nach individuellen Anforderungen,
            Umfang des Umzugsgutes und weiteren Faktoren erheblich abweichen.
            Dies gilt sowohl für Umzüge innerhalb Österreichs als auch für
            europaweite Umzüge. Für ein verbindliches Angebot kontaktieren Sie{" "}
            {COMPANY_INFO.name} bitte direkt.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            7. Transportschäden
          </h2>
          <p className="text-muted-foreground mb-4">
            Trotz größter Sorgfalt können bei Umzügen Schäden entstehen. Die
            Haftung von Richard Umzug richtet sich nach den gesetzlichen
            Bestimmungen und unseren Allgemeinen Geschäftsbedingungen. Wir
            empfehlen, wertvolle Gegenstände selbst zu transportieren oder eine
            zusätzliche Versicherung abzuschließen. Bei internationalen Umzügen
            innerhalb Europas gelten zusätzliche Versicherungsbedingungen.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            8. Internationale Umzüge
          </h2>
          <p className="text-muted-foreground mb-4">
            Bei europaweiten Umzügen können zusätzliche rechtliche Bestimmungen
            des Ziellandes gelten. Richard Umzug berät Sie gerne zu den
            spezifischen Anforderungen für internationale Umzüge.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Stand: Dezember 2024
          </p>
        </div>
      </div>
    </section>
  );
}
