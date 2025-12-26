import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Globe,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const settings = {
  companyName: "Richard Umzug",
  phone: "004368120697499",
  email: "Info@RichardUmzug.at",
  whatsapp: "4368120697499",
  openingHours: "Mo-Sa: 07:00 - 20:00 Uhr",
  addressStreet: "Alxingergasse",
  addressZip: "1100",
  addressCity: "Wien",
  logoUrl: logo.src,
  copyright:
    "© 2025 Richard Umzug. Alle Rechte vorbehalten. | Umzüge in Österreich & Europa",
  attributionLabel: "Albawab Alshamil Marketing",
  attributionUrl: "https://albawab-marketing.com",
};

const services = [
  { id: 1, title: "Privatumzug" },
  { id: 2, title: "Firmenumzug" },
  { id: 3, title: "Entrümpelung" },
  { id: 4, title: "Seniorenumzug" },
  { id: 5, title: "Europa Umzüge" },
  { id: 6, title: "Möbelmontage" },
];

const cities = [
  { id: 1, name: "Wien", slug: "umzug-wien" },
  { id: 2, name: "Graz", slug: "umzug-graz" },
  { id: 3, name: "Linz", slug: "umzug-linz" },
  { id: 4, name: "Salzburg", slug: "umzug-salzburg" },
  { id: 5, name: "Innsbruck", slug: "umzug-innsbruck" },
  { id: 6, name: "Klagenfurt", slug: "umzug-klagenfurt" },
];

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0D1628 0%, #121A2F 50%, #0D1628 100%)",
      }}
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-auto -mb-1"
        >
          <path
            d="M0 50V25C240 45 480 0 720 25C960 50 1200 10 1440 25V50H0Z"
            fill="#0D1628"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 pt-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={settings.logoUrl}
                alt={`${settings.companyName} Logo`}
                className="h-16 w-auto rounded-xl shadow-lg"
              />
              <div>
                <span className="text-xl font-bold block">
                  {settings.companyName}
                </span>
                <span className="text-white/60 text-sm">
                  Umzug & Entrümpelung
                </span>
              </div>
            </div>

            <p className="text-white/70 mb-4 leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Umzüge und
              Entrümpelungen in ganz Österreich und Europa.
            </p>

            {/* Europe Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              }}
            >
              <Globe className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">
                Österreichweit & Europaweit
              </span>
            </div>

            <div className="flex gap-3">
              <Social icon={Facebook} />
              <Social icon={Instagram} />
              <Social icon={Linkedin} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <SectionTitle title="Kontakt" />
            <ul className="space-y-4">
              <ContactItem icon={MapPin}>
                {settings.addressStreet}
                <br />
                {settings.addressZip} {settings.addressCity}
              </ContactItem>

              <ContactLink
                href={`tel:+${settings.phone}`}
                icon={Phone}
                label={settings.phone}
                hover="orange"
              />

              <ContactLink
                href={`https://wa.me/${settings.whatsapp}`}
                icon={MessageCircle}
                label="WhatsApp"
                hover="green"
              />

              <ContactLink
                href={`mailto:${settings.email}`}
                icon={Mail}
                label={settings.email}
                hover="orange"
              />

              <ContactItem icon={Clock}>{settings.openingHours}</ContactItem>
            </ul>
          </div>

          {/* Services */}
          <div>
            <SectionTitle title="Leistungen" />
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/leistungen"
                    className="text-white/70 hover:text-orange-400 hover:pl-2 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <SectionTitle title="Umzug in" />
            <ul className="space-y-3">
              {cities.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-white/70 hover:text-orange-400 hover:pl-2 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                    Umzug {c.name}
                  </Link>
                </li>
              ))}
              <li className="text-orange-400 font-medium flex items-center gap-2">
                <Globe className="h-4 w-4" />+ ganz Europa
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-lg">
              Bereit für Ihren Umzug mit {settings.companyName}?
            </h4>
            <p className="text-white/60">
              Umzüge in Österreich und ganz Europa
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="rounded-xl border-0"
            style={{
              background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
              boxShadow: "0 4px 20px rgba(255,106,0,0.3)",
            }}
          >
            <Link href="/umzug-anfragen" className="text-white">
              Jetzt Angebot anfordern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className=" flex justify-center flex-wrap gap-6 items-center pb-4 border-b  border-white/10">
        <Link
          className="text-white/50 hover:text-orange-400 transition-colors"
          href="/impressum"
        >
          Impressum
        </Link>
        <Link
          className="text-white/50 hover:text-orange-400 transition-colors"
          href="/datenschutz"
        >
          Datenschutz
        </Link>
        <Link
          className="text-white/50 hover:text-orange-400 transition-colors"
          href="agb"
        >
          AGB
        </Link>
        <Link
          className="text-white/50 hover:text-orange-400 transition-colors"
          href="/widerrufsrecht"
        >
          Widerrufsrecht
        </Link>
        <Link
          className="text-white/50 hover:text-orange-400 transition-colors"
          href="/cookies"
        >
          Cookies
        </Link>
        <Link
          className="text-white/50 hover:text-orange-400 transition-colors"
          href="/haftung"
        >
          Haftung
        </Link>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-white/50 mb-2">{settings.copyright}</p>
          <p className="text-xs text-white/40">
            Entwickelt von{" "}
            <a
              href={settings.attributionUrl}
              target="_blank"
              className="text-orange-400 hover:text-orange-300"
            >
              {settings.attributionLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
    <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
    {title}
  </h3>
);

const ContactItem = ({
  icon: Icon,
  children,
}: {
  icon: any;
  children: React.ReactNode;
}) => (
  <li className="flex items-start gap-3">
    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center mt-0.5">
      <Icon className="h-4 w-4 text-orange-400" />
    </div>
    <span className="text-white/70">{children}</span>
  </li>
);

const ContactLink = ({
  href,
  icon: Icon,
  label,
  hover,
}: {
  href: string;
  icon: any;
  label: string;
  hover: "orange" | "green";
}) => (
  <li>
    <a href={href} className="flex items-center gap-3 group">
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
          hover === "green"
            ? "bg-green-600/20 group-hover:bg-green-500"
            : "bg-white/10 group-hover:bg-orange-500"
        }`}
      >
        <Icon
          className={`h-4 w-4 ${
            hover === "green"
              ? "text-green-400 group-hover:text-white"
              : "text-orange-400 group-hover:text-white"
          }`}
        />
      </div>
      <span
        className={`font-medium transition-colors ${
          hover === "green"
            ? "text-white/70 group-hover:text-green-400"
            : "text-white/70 group-hover:text-orange-400"
        }`}
      >
        {label}
      </span>
    </a>
  </li>
);

const Social = ({ icon: Icon }: { icon: any }) => (
  <a className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110">
    <Icon className="h-5 w-5 text-white" />
  </a>
);
