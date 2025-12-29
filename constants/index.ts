// Company Information
export const COMPANY_INFO = {
  name: "Richard Umzug",
  phone: "004368120697499",
  email: "Info@RichardUmzug.at",
  whatsapp: "4368120697499",
  address: {
    street: "Alxingergasse",
    city: "Wien",
    zip: "1100",
    country: "Österreich",
  },
  openingHours: "Mo-Sa: 07:00 - 20:00 Uhr",
  domain: "RichardUmzug.at",
};

// Cities for SEO landing pages
export const CITIES = [
  { id: "wien", name: "Wien", slug: "umzug-wien", distance: 0 },
  { id: "graz", name: "Graz", slug: "umzug-graz", distance: 200 },
  { id: "linz", name: "Linz", slug: "umzug-linz", distance: 185 },
  { id: "salzburg", name: "Salzburg", slug: "umzug-salzburg", distance: 295 },
  {
    id: "innsbruck",
    name: "Innsbruck",
    slug: "umzug-innsbruck",
    distance: 480,
  },
  {
    id: "klagenfurt",
    name: "Klagenfurt",
    slug: "umzug-klagenfurt",
    distance: 320,
  },
  { id: "villach", name: "Villach", slug: "umzug-villach", distance: 360 },
  {
    id: "eisenstadt",
    name: "Eisenstadt",
    slug: "umzug-eisenstadt",
    distance: 60,
  },
  {
    id: "st-poelten",
    name: "St. Pölten",
    slug: "umzug-st-poelten",
    distance: 65,
  },
  { id: "bregenz", name: "Bregenz", slug: "umzug-bregenz", distance: 640 },
  { id: "tirol", name: "Tirol (Kufstein)", slug: "umzug-tirol", distance: 380 },
];

// Price ranges for cost calculator (from Vienna)
export const PRICE_RANGES: Record<
  string,
  { min: number; max: number; distance: number }
> = {
  salzburg: { min: 600, max: 2300, distance: 295 },
  graz: { min: 500, max: 1800, distance: 200 },
  linz: { min: 500, max: 1800, distance: 185 },
  innsbruck: { min: 1000, max: 3300, distance: 480 },
  tirol: { min: 800, max: 2800, distance: 380 },
  klagenfurt: { min: 700, max: 2300, distance: 320 },
  villach: { min: 800, max: 2500, distance: 360 },
  bregenz: { min: 1100, max: 3300, distance: 640 },
  eisenstadt: { min: 300, max: 800, distance: 60 },
  "st-poelten": { min: 300, max: 800, distance: 65 },
  wien: { min: 200, max: 600, distance: 0 },
};

// Services
export const SERVICES = [
  {
    id: "privatumzug",
    title: "Privatumzug",
    description: "Professioneller Umzugsservice für Privathaushalte",
    icon: "Home",
  },
  {
    id: "firmenumzug",
    title: "Firmenumzug",
    description: "Kompletter Büro- und Firmenumzug",
    icon: "Building2",
  },
  {
    id: "entrümpelung",
    title: "Entrümpelung",
    description: "Haushaltsauflösung und Entrümpelung",
    icon: "Trash2",
  },
  {
    id: "verpackung",
    title: "Verpackungsservice",
    description: "Professionelles Ein- und Auspacken",
    icon: "Package",
  },
  {
    id: "moebelmontage",
    title: "Möbelmontage",
    description: "Demontage und Montage Ihrer Möbel",
    icon: "Wrench",
  },
  {
    id: "lagerung",
    title: "Einlagerung",
    description: "Sichere Lagerung Ihrer Möbel und Gegenstände",
    icon: "Warehouse",
  },
  {
    id: "klaviertransport",
    title: "Klaviertransport",
    description: "Sicherer Transport von Klavieren und Flügeln",
    icon: "Music",
  },
  {
    id: "seniorenumzug",
    title: "Seniorenumzug",
    description: "Einfühlsamer Umzugsservice für Senioren",
    icon: "Heart",
  },
];

// Navigation items
export const NAV_ITEMS = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Umzugskosten-Rechner", href: "/umzugskosten-rechner" },
  { label: "Bewertungen", href: "/bewertungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faqs" },
];

export const reviews = [
  {
    id: 1,
    name: "Max Müller",
    rating: 5,
    date: "2024-10-12",
    text: "Sehr professioneller Service. Alles lief reibungslos und schnell.",
  },
  {
    id: 2,
    name: "Anna Schmidt",
    rating: 5,
    date: "2024-09-28",
    text: "Top Umzugsfirma! Freundliches Team und sehr sorgfältig.",
  },
  {
    id: 3,
    name: "Daniel Weber",
    rating: 4,
    date: "2024-08-03",
    text: "Guter Service, pünktlich und zuverlässig. Gerne wieder.",
  },
  {
    id: 4,
    name: "Laura Hoffmann",
    rating: 5,
    date: "2024-11-02",
    text: "Von der Anfrage bis zur Durchführung alles perfekt organisiert.",
  },
  {
    id: 5,
    name: "Sebastian König",
    rating: 4,
    date: "2024-10-20",
    text: "Sehr hilfsbereit und professionell. Preis-Leistung stimmt.",
  },
  {
    id: 6,
    name: "Miriam Fischer",
    rating: 5,
    date: "2024-09-15",
    text: "Stressfreier Umzug dank eines eingespielten Teams. Absolut empfehlenswert.",
  },
  {
    id: 7,
    name: "Thomas Bauer",
    rating: 5,
    date: "2024-08-29",
    text: "Pünktlich, sauber gearbeitet und sehr freundlich. Jederzeit wieder.",
  },
  {
    id: 8,
    name: "Nina Wagner",
    rating: 4,
    date: "2024-07-18",
    text: "Gute Kommunikation und schnelle Abwicklung. Kleine Wartezeit, sonst top.",
  },
  {
    id: 9,
    name: "Markus Schneider",
    rating: 5,
    date: "2024-06-30",
    text: "Sehr sorgfältiger Umgang mit Möbeln und Kartons. Vielen Dank!",
  },
  {
    id: 10,
    name: "Julia Becker",
    rating: 5,
    date: "2024-06-05",
    text: "Professionell, zuverlässig und transparent bei den Kosten.",
  },
];
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maria S.",
    city: "Wien",
    rating: 5,
    text: "Absolut professioneller Service! Das Team war pünktlich, freundlich und hat alles mit größter Sorgfalt transportiert. Sehr empfehlenswert!",
    date: "2024-11-15",
  },
  {
    id: 2,
    name: "Thomas K.",
    city: "Graz",
    rating: 5,
    text: "Hervorragender Umzugsservice von Wien nach Graz. Faire Preise und zuverlässige Arbeit. Würde ich jederzeit wieder buchen.",
    date: "2024-11-10",
  },
  {
    id: 3,
    name: "Sandra M.",
    city: "Linz",
    rating: 5,
    text: "Super Team, super Service! Mein Umzug wurde stressfrei und schnell erledigt. Vielen Dank!",
    date: "2024-11-08",
  },
  {
    id: 4,
    name: "Michael R.",
    city: "Salzburg",
    rating: 5,
    text: "Professionelle Entrümpelung meiner Wohnung. Schnell, sauber und zu einem fairen Preis. Top!",
    date: "2024-11-05",
  },
  {
    id: 5,
    name: "Anna L.",
    city: "Innsbruck",
    rating: 5,
    text: "Der Fernumzug von Wien nach Innsbruck war perfekt organisiert. Alle Möbel kamen unbeschadet an.",
    date: "2024-10-30",
  },
  {
    id: 6,
    name: "Peter H.",
    city: "Wien",
    rating: 5,
    text: "Bester Umzugsservice in Wien! Das Team hat hart gearbeitet und war sehr vorsichtig mit unseren Sachen.",
    date: "2024-10-28",
  },
  {
    id: 7,
    name: "Christine B.",
    city: "Klagenfurt",
    rating: 5,
    text: "Sehr zufrieden mit dem Umzug nach Klagenfurt. Pünktlich, professionell und freundlich.",
    date: "2024-10-25",
  },
  {
    id: 8,
    name: "Stefan W.",
    city: "Villach",
    rating: 5,
    text: "Ausgezeichneter Service! Die Möbelmontage war perfekt und das Team sehr kompetent.",
    date: "2024-10-20",
  },
  {
    id: 9,
    name: "Julia F.",
    city: "Eisenstadt",
    rating: 5,
    text: "Schneller und unkomplizierter Umzug nach Eisenstadt. Sehr empfehlenswert!",
    date: "2024-10-18",
  },
  {
    id: 10,
    name: "Wolfgang G.",
    city: "St. Pölten",
    rating: 5,
    text: "Perfekte Abwicklung unseres Firmenumzugs. Das Team war fleißig und professionell.",
    date: "2024-10-15",
  },
  {
    id: 11,
    name: "Elisabeth N.",
    city: "Bregenz",
    rating: 5,
    text: "Trotz der weiten Strecke nach Bregenz war alles bestens organisiert. Danke!",
    date: "2024-10-12",
  },
  {
    id: 12,
    name: "Markus D.",
    city: "Wien",
    rating: 5,
    text: "Unser Klaviertransport wurde mit höchster Sorgfalt durchgeführt. Absolut zufrieden!",
    date: "2024-10-10",
  },
  {
    id: 13,
    name: "Karin P.",
    city: "Graz",
    rating: 5,
    text: "Freundliches Team und faire Preise. Der Umzug meiner Eltern wurde liebevoll betreut.",
    date: "2024-10-08",
  },
  {
    id: 14,
    name: "Andreas M.",
    city: "Linz",
    rating: 5,
    text: "Schnelle und effiziente Entrümpelung. Das Team hat großartige Arbeit geleistet!",
    date: "2024-10-05",
  },
  {
    id: 15,
    name: "Martina H.",
    city: "Salzburg",
    rating: 5,
    text: "Von der Beratung bis zur Durchführung - alles war perfekt. Sehr professionell!",
    date: "2024-10-01",
  },
  {
    id: 16,
    name: "Robert S.",
    city: "Wien",
    rating: 5,
    text: "Pünktlich, zuverlässig und faire Preise. Was will man mehr?",
    date: "2024-09-28",
  },
  {
    id: 17,
    name: "Sabine K.",
    city: "Innsbruck",
    rating: 5,
    text: "Der Umzug nach Tirol war bestens organisiert. Sehr empfehlenswert!",
    date: "2024-09-25",
  },
  {
    id: 18,
    name: "Franz J.",
    city: "Wien",
    rating: 5,
    text: "Top Service! Das Team hat alles schnell und sicher transportiert.",
    date: "2024-09-22",
  },
  {
    id: 19,
    name: "Claudia R.",
    city: "Klagenfurt",
    rating: 5,
    text: "Sehr zufrieden mit dem Verpackungsservice. Alles kam sicher an!",
    date: "2024-09-20",
  },
  {
    id: 20,
    name: "Herbert A.",
    city: "Villach",
    rating: 5,
    text: "Professioneller Seniorenumzug. Das Team war sehr einfühlsam und geduldig.",
    date: "2024-09-18",
  },
];

// FAQ Items
export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Wie viel kostet ein Umzug in Wien?",
    answer:
      "Die Kosten für einen Umzug in Wien hängen von verschiedenen Faktoren ab: Wohnungsgröße, Etage, Entfernung und gewünschte Zusatzleistungen. Ein lokaler Umzug in Wien beginnt bei etwa 200€. Nutzen Sie unseren Umzugskosten-Rechner für eine erste Schätzung.",
  },
  {
    id: 2,
    question: "Wie früh sollte ich meinen Umzug buchen?",
    answer:
      "Wir empfehlen, mindestens 2-4 Wochen im Voraus zu buchen. In Stoßzeiten (Monatsende, Sommer) sollten Sie noch früher planen. Kurzfristige Anfragen sind je nach Verfügbarkeit möglich.",
  },
  {
    id: 3,
    question: "Bieten Sie auch Entrümpelung an?",
    answer:
      "Ja, wir bieten professionelle Entrümpelung und Haushaltsauflösung an. Wir kümmern uns um die fachgerechte Entsorgung und spenden noch brauchbare Gegenstände wenn gewünscht.",
  },
  {
    id: 4,
    question: "Sind meine Möbel während des Transports versichert?",
    answer:
      "Ja, alle Transporte sind durch unsere Transportversicherung abgedeckt. Bei wertvollen Gegenständen empfehlen wir eine zusätzliche Wertversicherung, die wir gerne für Sie organisieren.",
  },
  {
    id: 5,
    question: "Bieten Sie Verpackungsmaterial an?",
    answer:
      "Ja, wir liefern alle notwendigen Verpackungsmaterialien: Umzugskartons, Luftpolsterfolie, Klebeband und Schutzdecken. Diese können im Voraus geliefert oder am Umzugstag mitgebracht werden.",
  },
  {
    id: 6,
    question: "Was passiert bei schlechtem Wetter?",
    answer:
      "Wir führen Umzüge bei jedem Wetter durch. Unsere LKWs sind überdacht und wir verwenden wasserdichte Schutzhüllen für Ihre Möbel. Nur bei extremen Wetterbedingungen vereinbaren wir einen Ersatztermin.",
  },
  {
    id: 7,
    question: "Können Sie auch Klaviere transportieren?",
    answer:
      "Ja, wir sind auf Klaviertransporte spezialisiert. Unsere Mitarbeiter sind geschult und verfügen über die notwendige Ausrüstung für den sicheren Transport von Klavieren und Flügeln.",
  },
  {
    id: 8,
    question: "Bieten Sie auch Lagerung an?",
    answer:
      "Ja, wir bieten sichere Einlagerungsmöglichkeiten für kurz- oder langfristige Lagerung. Unsere Lagerräume sind trocken, sicher und klimatisiert.",
  },
];
