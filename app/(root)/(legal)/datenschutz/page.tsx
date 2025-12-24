import { COMPANY_INFO } from "@/constants";

export default function Datenschutz() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Datenschutzerklärung – Richard Umzug
          </h1>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Allgemeine Hinweise
          </h3>
          <p className="text-muted-foreground mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. Verantwortlicher
          </h2>
          <p className="text-muted-foreground mb-4">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <br />
            {COMPANY_INFO.name}
            <br />
            {COMPANY_INFO.address.street}
            <br />
            {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
            <br />
            Telefon: {COMPANY_INFO.phone}
            <br />
            E-Mail: {COMPANY_INFO.email}
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            3. Servicegebiet
          </h2>
          <p className="text-muted-foreground mb-4">
            Richard Umzug bietet Umzugsdienstleistungen in ganz Österreich und
            europaweit an. Bei der Verarbeitung Ihrer Daten im Zusammenhang mit
            internationalen Umzügen innerhalb Europas werden alle Bestimmungen
            der DSGVO eingehalten.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            4. Datenerfassung auf dieser Website
          </h2>
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Kontaktformular
          </h3>
          <p className="text-muted-foreground mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Dies gilt sowohl für
            Anfragen zu Umzügen innerhalb Österreichs als auch für europaweite
            Umzüge.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Anfrage per E-Mail oder Telefon
          </h3>
          <p className="text-muted-foreground mb-4">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage
            inklusive aller daraus hervorgehenden personenbezogenen Daten zum
            Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
            verarbeitet.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            5. Ihre Rechte
          </h2>
          <p className="text-muted-foreground mb-4">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
            oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
            Thema Datenschutz können Sie sich jederzeit an Richard Umzug wenden.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            6. Hosting
          </h2>
          <p className="text-muted-foreground mb-4">
            Diese Website wird bei einem externen Dienstleister gehostet. Die
            personenbezogenen Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hosters gespeichert.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            7. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Widerruf Ihrer Einwilligung
          </h3>
          <p className="text-muted-foreground mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h3>
          <p className="text-muted-foreground mb-4">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige
            Aufsichtsbehörde in Österreich ist die Österreichische
            Datenschutzbehörde.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            8. SSL- bzw. TLS-Verschlüsselung
          </h2>
          <p className="text-muted-foreground mb-4">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von "http://" auf
            "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Stand: Dezember 2024
          </p>
        </div>
      </div>
    </section>
  );
}
