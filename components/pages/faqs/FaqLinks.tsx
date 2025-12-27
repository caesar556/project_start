import Link from "next/link";

export default function FaqLinks() {
  return (
    <nav
      className="mt-10 p-6 rounded-2xl bg-muted/50"
      aria-label="Weiterführende Seiten"
    >
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Weiterführende Informationen
      </h2>
      <div className="flex flex-wrap gap-4">
        <Link href="/leistungen" className="text-orange-500 hover:underline">
          → Alle Leistungen
        </Link>
        <Link
          href="/umzugskosten-rechner"
          className="text-orange-500 hover:underline"
        >
          → Umzugskosten berechnen
        </Link>
        <Link href="/bewertungen" className="text-orange-500 hover:underline">
          → Kundenbewertungen
        </Link>
        <Link href="/kontakt" className="text-orange-500 hover:underline">
          → Kontakt
        </Link>
      </div>
    </nav>
  );
}
