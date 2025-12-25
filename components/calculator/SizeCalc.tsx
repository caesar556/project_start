import { Home } from "lucide-react";
import { Label } from "../ui/label";
import { SizeCalcProps } from "@/types";
import { Slider } from "../ui/slider";

export default function SizeCalc({
  CALCULATOR_CONFIG,
  area,
  setArea,
  rooms,
  setRooms,
}: SizeCalcProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(255, 106, 0, 0.15)" }}
        >
          <Home className="h-6 w-6 text-orange-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">Wohnungsgröße</h3>
          <p className="text-sm text-white/60">Fläche und Zimmerzahl</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="space-y-4 rounded-2xl p-6"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-center">
            <Label className="font-medium text-white/80">
              {CALCULATOR_CONFIG.labels.wohnflaeche}
            </Label>
            <span
              className="text-xl font-bold px-4 py-1 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                color: "white",
              }}
            >
              {area} m²
            </span>
          </div>
          <Slider
            value={[area]}
            onValueChange={(v) => setArea(v[0])}
            min={20}
            max={200}
            step={5}
            className="w-full [&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500 [&_.bg-primary]:bg-orange-500"
          />
          <div className="flex justify-between text-xs text-white/50">
            <span>20 m²</span>
            <span>200 m²</span>
          </div>
        </div>
        <div
          className="space-y-4 rounded-2xl p-6"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex justify-between items-center">
            <Label className="font-medium text-white/80">
              {CALCULATOR_CONFIG.labels.zimmeranzahl}
            </Label>
            <span
              className="text-xl font-bold px-4 py-1 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
                color: "white",
              }}
            >
              {rooms}
            </span>
          </div>
          <Slider
            value={[rooms]}
            onValueChange={(v) => setRooms(v[0])}
            min={1}
            max={8}
            step={1}
            className="w-full [&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500 [&_.bg-primary]:bg-orange-500"
          />
          <div className="flex justify-between text-xs text-white/50">
            <span>1 Zimmer</span>
            <span>8 Zimmer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
