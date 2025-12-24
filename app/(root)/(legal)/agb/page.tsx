import { COMPANY_INFO } from "@/constants";

export default function AGB() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Allgemeine Geschäftsbedingungen (AGB) – Richard Umzug
          </h1>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 1 Geltungsbereich
          </h2>
          <p className="text-muted-foreground mb-4">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die
            zwischen {COMPANY_INFO.name}
            (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend
            "Auftraggeber") über Umzugs-, Transport- und
            Entrümpelungsdienstleistungen geschlossen werden. Die AGB gelten
            sowohl für Dienstleistungen innerhalb Österreichs als auch für
            europaweite Umzüge und Transporte.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 2 Servicegebiet
          </h2>
          <p className="text-muted-foreground mb-4">
            Richard Umzug bietet professionelle Umzüge und Entrümpelungen in
            ganz Österreich sowie in über 20 europäischen Ländern an. Das
            Servicegebiet umfasst unter anderem Deutschland, Schweiz, Italien,
            Frankreich, Niederlande, Belgien, Polen, Tschechien, Ungarn,
            Slowakei, Slowenien und Kroatien.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 3 Vertragsschluss
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Die Darstellung unserer Leistungen auf der Website stellt kein
            rechtlich bindendes Angebot dar.
            <br />
            2. Mit der Buchung einer Leistung gibt der Auftraggeber ein
            verbindliches Angebot ab.
            <br />
            3. Der Vertrag kommt durch unsere Auftragsbestätigung per E-Mail
            oder telefonisch zustande.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 4 Leistungsumfang
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Der Umfang der Leistungen ergibt sich aus der jeweiligen
            Auftragsbestätigung.
            <br />
            2. Änderungen oder Ergänzungen bedürfen der schriftlichen
            Vereinbarung.
            <br />
            3. Bei Umzügen umfasst die Grundleistung: Verladung, Transport und
            Entladung des Umzugsgutes.
            <br />
            4. Bei internationalen Umzügen innerhalb Europas können zusätzliche
            Leistungen wie Zollformalitäten anfallen.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 5 Preise und Zahlung
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Alle angegebenen Preise verstehen sich inklusive der gesetzlichen
            Mehrwertsteuer.
            <br />
            2. Die Bezahlung erfolgt nach Leistungserbringung in bar oder per
            Überweisung.
            <br />
            3. Bei größeren Aufträgen oder internationalen Umzügen kann eine
            Anzahlung vereinbart werden.
            <br />
            4. Zusätzliche Leistungen werden nach tatsächlichem Aufwand
            berechnet.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 6 Pflichten des Auftraggebers
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Der Auftraggeber sorgt für die Zugänglichkeit der Räumlichkeiten.
            <br />
            2. Wertvolle Gegenstände, Dokumente und Bargeld sind selbst zu
            transportieren.
            <br />
            3. Der Auftraggeber informiert über besondere Eigenschaften des
            Umzugsgutes.
            <br />
            4. Halteverbotszonen sind rechtzeitig zu beantragen oder können von
            uns organisiert werden.
            <br />
            5. Bei internationalen Umzügen ist der Auftraggeber für
            erforderliche Dokumente verantwortlich.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 7 Haftung
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Der Auftragnehmer haftet für Schäden am Umzugsgut nach den
            gesetzlichen Bestimmungen.
            <br />
            2. Die Haftung für leichte Fahrlässigkeit ist auf vorhersehbare,
            vertragstypische Schäden beschränkt.
            <br />
            3. Schäden sind unmittelbar bei Übergabe schriftlich anzuzeigen.
            <br />
            4. Verdeckte Mängel sind innerhalb von 7 Tagen nach Lieferung
            anzuzeigen.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 8 Stornierung
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Stornierungen sind bis 7 Tage vor dem Umzugstermin kostenfrei
            möglich.
            <br />
            2. Bei späterer Stornierung werden folgende Gebühren fällig:
            <br />
            - 6-3 Tage vorher: 30% des Auftragswertes
            <br />
            - 2-1 Tage vorher: 50% des Auftragswertes
            <br />- Am Umzugstag: 80% des Auftragswertes
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 9 Versicherung
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Richard Umzug verfügt über eine Transportversicherung für
            nationale und internationale Transporte.
            <br />
            2. Auf Wunsch kann eine zusätzliche Wertversicherung abgeschlossen
            werden.
            <br />
            3. Die Versicherungsbedingungen werden auf Anfrage zur Verfügung
            gestellt.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 10 Datenschutz
          </h2>
          <p className="text-muted-foreground mb-4">
            Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer
            Datenschutzerklärung und den Bestimmungen der DSGVO.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            § 11 Schlussbestimmungen
          </h2>
          <p className="text-muted-foreground mb-4">
            1. Es gilt österreichisches Recht.
            <br />
            2. Gerichtsstand für alle Streitigkeiten ist Wien.
            <br />
            3. Sollten einzelne Bestimmungen unwirksam sein, bleibt die
            Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Stand: Dezember 2024
          </p>
        </div>
      </div>
    </section>
  );
}
