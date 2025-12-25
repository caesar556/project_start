import { Sparkles } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ExtraService } from "@/types";

type ExtraServicesProps = {
  extraServices: ExtraService[];
};

export default function ExtraServices({ extraServices }: ExtraServicesProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(255, 106, 0, 0.15)" }}
        >
          <Sparkles className="h-6 w-6 text-orange-400" />
        </div>
        <div>
          <h3 className="font-bold text-white">Zusatzleistungen</h3>
          <p className="text-sm text-white/60">Optionale Services</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {extraServices.map((service) => (
          <label
            key={service.id}
            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              service.checked
                ? "border-orange-500 bg-orange-500/10"
                : "border-white/10 hover:border-orange-500/50 bg-white/5"
            }`}
          >
            <Checkbox
              checked={service.checked}
              onCheckedChange={(c) => service.setChecked(!!c)}
              className="h-5 w-5 border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
            />

            <div className="flex-1">
              <span className="font-medium text-white block">
                {service.label}
              </span>
              <span className="text-sm text-orange-400 font-semibold">
                {service.price}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
