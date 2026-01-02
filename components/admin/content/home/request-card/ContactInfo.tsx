import { Mail, Phone } from "lucide-react";

interface ContactInfoProps {
  email: string;
  phone: string;
}

export function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase flex items-center gap-1">
          <Mail className="h-2.5 w-2.5" /> Email
        </label>
        <p className="text-sm text-gray-700 dark:text-slate-300 font-medium truncate">
          {email}
        </p>
      </div>
      <div>
        <label className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase flex items-center gap-1">
          <Phone className="h-2.5 w-2.5" /> Telefon
        </label>
        <p className="text-sm text-gray-700 dark:text-slate-300 font-medium">
          {phone}
        </p>
      </div>
    </div>
  );
}
