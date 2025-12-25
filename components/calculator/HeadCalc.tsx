import { Calculator } from "lucide-react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function headCalc() {
  return (
    <CardHeader
      className="pb-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0D1628 0%, #1A2642 50%, #0D1628 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="flex items-center gap-4 mb-2 relative z-10">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
            boxShadow: "0 8px 30px rgba(255, 106, 0, 0.4)",
          }}
        >
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-white">
            Umzugskosten-Rechner
          </CardTitle>
          <CardDescription className="text-white/70">
            Berechnen Sie die ungefähren Kosten für Ihren Umzug
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  );
}
