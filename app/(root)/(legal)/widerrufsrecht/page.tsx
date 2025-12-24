import { COMPANY_INFO } from "@/constants";

export default function Widerrufsrecht() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Widerrufsrecht – Richard Umzug
          </h1>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Widerrufsbelehrung
          </h2>
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Widerrufsrecht
          </h3>
          <p className="text-muted-foreground mb-4">
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag des Vertragsabschlusses. Dies gilt für alle
            Dienstleistungen von Richard Umzug, sowohl für Umzüge innerhalb
            Österreichs als auch für europaweite Umzüge.
          </p>
          <p className="text-muted-foreground mb-4">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ({COMPANY_INFO.name}
            , {COMPANY_INFO.address.street},{COMPANY_INFO.address.zip}{" "}
            {COMPANY_INFO.address.city}, E-Mail: {COMPANY_INFO.email}, Telefon:{" "}
            {COMPANY_INFO.phone}) mittels einer eindeutigen Erklärung (z. B. ein
            mit der Post versandter Brief oder E-Mail) über Ihren Entschluss,
            diesen Vertrag zu widerrufen, informieren.
          </p>
          <p className="text-muted-foreground mb-4">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
            Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
            Widerrufsfrist absenden.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Folgen des Widerrufs
          </h3>
          <p className="text-muted-foreground mb-4">
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
            die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
            vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
            Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
            Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
            ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
            wurde ausdrücklich etwas anderes vereinbart.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">
            Besondere Hinweise
          </h3>
          <p className="text-muted-foreground mb-4">
            Haben Sie verlangt, dass die Dienstleistung während der
            Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen
            Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem
            Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses
            Vertrags unterrichten, bereits erbrachten Dienstleistungen im
            Vergleich zum Gesamtumfang der im Vertrag vorgesehenen
            Dienstleistungen entspricht.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Ausnahmen vom Widerrufsrecht
          </h2>
          <p className="text-muted-foreground mb-4">
            Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von
            Dienstleistungen, wenn der Unternehmer die Dienstleistung
            vollständig erbracht hat und mit der Ausführung der Dienstleistung
            erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche
            Zustimmung gegeben hat und gleichzeitig seine Kenntnis davon
            bestätigt hat, dass er sein Widerrufsrecht bei vollständiger
            Vertragserfüllung durch den Unternehmer verliert.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Muster-Widerrufsformular
          </h2>
          <p className="text-muted-foreground mb-4">
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
            dieses Formular aus und senden Sie es zurück.)
          </p>
          <div className="bg-card border border-border rounded-lg p-4 mb-4">
            <p className="text-muted-foreground mb-2">
              An {COMPANY_INFO.name}
              <br />
              {COMPANY_INFO.address.street}
              <br />
              {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
              <br />
              E-Mail: {COMPANY_INFO.email}
            </p>
            <p className="text-muted-foreground mb-2">
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
              abgeschlossenen Vertrag über die Erbringung der folgenden
              Dienstleistung (Umzug/Entrümpelung in Österreich oder Europa):
            </p>
            <p className="text-muted-foreground mb-2">
              _______________________________________________
            </p>
            <p className="text-muted-foreground mb-2">
              Bestellt am (*)/erhalten am (*): _______________
            </p>
            <p className="text-muted-foreground mb-2">
              Name des/der Verbraucher(s): _______________
            </p>
            <p className="text-muted-foreground mb-2">
              Anschrift des/der Verbraucher(s): _______________
            </p>
            <p className="text-muted-foreground mb-2">
              Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
              Papier): _______________
            </p>
            <p className="text-muted-foreground">Datum: _______________</p>
            <p className="text-sm text-muted-foreground mt-4">
              (*) Unzutreffendes streichen.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Stand: Dezember 2024
          </p>
        </div>
      </div>
    </section>
  );
}
