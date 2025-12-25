import { Building2 } from "lucide-react";
import { Label } from "../ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { FloorsProps } from "@/types";

  

export default function Floors({
  CALCULATOR_CONFIG,
  fromFloor,
  setFromFloor,
  toFloor,
  setToFloor,
  fromElevator,
  setFromElevator,
  toElevator,
  setToElevator,
}: FloorsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(255, 106, 0, 0.15)" }}
        >
          <Building2 className="h-6 w-6 text-orange-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">Stockwerke</h3>
          <p className="text-sm text-white/60">Auszug und Einzug</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="rounded-2xl p-6 space-y-4"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Label className="font-medium text-white/80">
            {CALCULATOR_CONFIG.labels.auszugStock}
          </Label>
          <Select value={String(fromFloor)} onValueChange={(v) => setFromFloor(Number(v))}>
            <SelectTrigger className="h-14 rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A2642] border-white/10">
              {[...Array(11)].map((_, i) => (
                <SelectItem
                  key={i}
                  value={String(i)}
                  className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                  {i === 0 ? "Erdgeschoss" : `${i}. Stock`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ background: "rgba(255, 255, 255, 0.05)" }}
          >
            <Checkbox
              checked={fromElevator}
              onCheckedChange={(c) => setFromElevator(!!c)}
              className="h-5 w-5 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
            />
            <Label className="font-normal cursor-pointer text-white/80">
              {CALCULATOR_CONFIG.labels.aufzugVorhanden}
            </Label>
          </div>
        </div>

        <div
          className="rounded-2xl p-6 space-y-4"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Label className="font-medium text-white/80">
            {CALCULATOR_CONFIG.labels.einzugStock}
          </Label>
          <Select value={String(toFloor)} onValueChange={(v) => setToFloor(Number(v))}>
            <SelectTrigger className="h-14 rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A2642] border-white/10">
              {[...Array(11)].map((_, i) => (
                <SelectItem
                  key={i}
                  value={String(i)}
                  className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                >
                  {i === 0 ? "Erdgeschoss" : `${i}. Stock`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ background: "rgba(255, 255, 255, 0.05)" }}
          >
            <Checkbox
              checked={toElevator}
              onCheckedChange={(c) => setToElevator(!!c)}
              className="h-5 w-5 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
            />
            <Label className="font-normal cursor-pointer text-white/80">
              {CALCULATOR_CONFIG.labels.aufzugVorhanden}
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}