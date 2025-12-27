import { Phone, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Address {
  street: string;
  zip: string;
  city: string;
}

interface ContactInfoBlockProps {
  phone: string;
  email: string;
  whatsapp: string;
  address: Address;
  showHeading?: boolean;
  variant?: "default" | "compact";
}

export default function ContactInfoBlock({
  phone,
  email,
  whatsapp,
  address,
  showHeading = true,
  variant = "default",
}: ContactInfoBlockProps) {
  if (variant === "compact") {
    return (
      <div
        className="rounded-2xl p-6"
        style={{
          background: "linear-gradient(135deg, #0D1628 0%, #121A2F 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h3 className="font-bold text-white mb-4 text-lg">Richard Umzug</h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-orange-400" />
            <span className="text-white/80 text-sm">
              {address.street}, {address.zip} {address.city}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-orange-400" />
            <a
              href={`tel:${phone}`}
              className="text-white/80 text-sm hover:text-orange-400"
            >
              {phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-orange-400" />
            <a
              href={`mailto:${email}`}
              className="text-white/80 text-sm hover:text-orange-400"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            asChild
            size="sm"
            className="flex-1 rounded-lg border-0 bg-orange-500"
          >
            <a href={`tel:${phone}`} className="text-white">
              <Phone className="mr-2 h-4 w-4" />
              Anrufen
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            className="flex-1 rounded-lg bg-red-600 hover:bg-green-700 border-0 "
          >
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-3xl p-8"
      style={{
        background: "linear-gradient(135deg, #0D1628 0%, #121A2F 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {showHeading && (
        <h3 className="font-bold text-white mb-6 text-2xl">Richard Umzug</h3>
      )}

      <div className="space-y-5">
        <InfoItem icon={<MapPin />} title="Adresse">
          {address.street}
          <br />
          {address.zip} {address.city}, Österreich
        </InfoItem>

        <InfoItem icon={<Phone />} title="Telefon">
          <a href={`tel:${phone}`} className="hover:text-orange-400">
            {phone}
          </a>
        </InfoItem>

        <InfoItem icon={<Mail />} title="E-Mail">
          <a href={`mailto:${email}`} className="hover:text-orange-400">
            {email}
          </a>
        </InfoItem>

        <InfoItem icon={<Globe />} title="Servicegebiet">
          Österreich & Europa
        </InfoItem>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button asChild size="lg" className="flex-1 bg-orange-500 rounded-xl text-white">
          <a href={`tel:${phone}`}>
            <Phone className="mr-2 h-5 w-5" />
            Jetzt anrufen
          </a>
        </Button>

        <Button
          asChild
          size="lg"
          className="flex-1 bg-green-600 hover:bg-green-700 rounded-xl text-white"
        >
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

function InfoItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-500/15 text-orange-400">
        {icon}
      </div>
      <div className="text-white/70">
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        {children}
      </div>
    </div>
  );
}
