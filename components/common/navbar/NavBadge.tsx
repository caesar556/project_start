import { Globe } from "lucide-react";

export default function NavBadge() {
  return (
    <div
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl mb-4"
      style={{
        background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
      }}
    >
      <Globe className="h-4 w-4 text-white" />
      <span className="text-sm font-semibold text-white">
        Österreich & Europaweit
      </span>
    </div>
  );
}
