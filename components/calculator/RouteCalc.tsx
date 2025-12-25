import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { RouteCalcProps } from "@/types";
import { Label } from "../ui/label";

export default function RouteCalc({
  CALCULATOR_CONFIG,
  fromCity,
  setFromCity,
  setToCity,
  toCity,
}: RouteCalcProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(255, 106, 0, 0.15)" }}
        >
          <MapPin className="h-6 w-6 text-orange-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">Strecke</h3>
          <p className="text-sm text-white/60">Geben Sie Start und Ziel ein</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-white/80">
            {CALCULATOR_CONFIG.labels.startort}
          </Label>
          <Input
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            placeholder={CALCULATOR_CONFIG.placeholders.startort}
            className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/40 hover:bg-white/10 focus:border-orange-500"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium text-white/80">
            {CALCULATOR_CONFIG.labels.zielort}
          </Label>
          <Input
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            placeholder={CALCULATOR_CONFIG.placeholders.zielort}
            className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/40 hover:bg-white/10 focus:border-orange-500"
          />
        </div>
      </div>
    </div>
  );
}
