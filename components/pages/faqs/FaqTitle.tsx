import { HelpCircle } from "lucide-react";

export default function faqTitle() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(255, 106, 0, 0.15)" }}
      >
        <HelpCircle className="h-6 w-6 text-orange-500" aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">
        FAQ – Richard Umzug
      </h2>
    </div>
  );
}
