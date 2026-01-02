import { ChevronRight, ArrowUpRight, MapPin, Building2, Ruler, Calendar, Euro, Home } from "lucide-react";
import type { MoveRequest, ClearanceRequest } from "@/types";

interface ServiceDetailsProps {
  data: MoveRequest | ClearanceRequest;
  type: "move" | "clearance";
  isDialog?: boolean;
}

export function ServiceDetails({ data, type, isDialog = false }: ServiceDetailsProps) {
  const moveData = type === "move" ? (data as MoveRequest) : null;
  const clearData = type === "clearance" ? (data as ClearanceRequest) : null;

  if (type === "move") {
    if (!isDialog) {
      return (
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md border border-gray-100 dark:border-slate-800">
            <MapPin className="h-3.5 w-3.5 text-orange-500" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {moveData?.fromCity}
            </span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-orange-400 animate-pulse" />
          <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md border border-gray-100 dark:border-slate-800">
            <MapPin className="h-3.5 w-3.5 text-orange-500" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {moveData?.toCity}
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {moveData?.estimatedMin && moveData?.estimatedMax && (
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 dark:from-orange-500/20 dark:to-transparent p-5 rounded-2xl border border-orange-200/50 dark:border-orange-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Euro className="h-12 w-12" />
            </div>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Euro className="h-3 w-3" /> Preisrahmen (Rechner)
            </p>
            <p className="text-2xl font-black text-orange-600 dark:text-orange-500">
              € {moveData.estimatedMin.toLocaleString("de-AT")} – {moveData.estimatedMax.toLocaleString("de-AT")}
            </p>
          </div>
        )}

        <div className="flex items-stretch justify-between gap-4 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent -z-10" />
          
          <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm relative">
            <div className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Start
            </div>
            <div className="space-y-2">
              <p className="text-base font-black text-gray-900 dark:text-white">
                {moveData?.fromCity}
              </p>
              <div className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-slate-400">
                <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
                <p>{moveData?.fromAddress}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-400">
                <Building2 className="h-3 w-3 shrink-0" />
                <p>{moveData?.rooms} Zimmer</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-2">
             <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 animate-in fade-in zoom-in duration-500">
                <ChevronRight className="h-6 w-6" />
             </div>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
            <div className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Ziel
            </div>
            <div className="space-y-2">
              <p className="text-base font-black text-gray-900 dark:text-white">
                {moveData?.toCity}
              </p>
              <div className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-slate-400">
                <MapPin className="h-3 w-3 mt-0.5 shrink-0" />
                <p>{moveData?.toAddress}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">Datum</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {moveData?.moveDate
                  ? new Date(moveData.moveDate).toLocaleDateString("de-DE", { day: '2-digit', month: 'long', year: 'numeric' })
                  : "Flexibel"}
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Ruler className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">Größe</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                {moveData?.area ? `${moveData.area} m²` : "K.A."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={isDialog ? "space-y-6" : ""}>
      {!isDialog ? (
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-slate-800/50 px-2.5 py-1 rounded-md border border-gray-100 dark:border-slate-800">
            <Home className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {clearData?.city} • {clearData?.propertyType}
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase tracking-widest">Standort</p>
                <p className="text-lg font-black text-gray-900 dark:text-white">{clearData?.city}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">{clearData?.address}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">Immobilie</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{clearData?.propertyType}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">Datum</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {clearData?.preferredDate
                    ? new Date(clearData.preferredDate).toLocaleDateString("de-DE", { day: '2-digit', month: 'long', year: 'numeric' })
                    : "Flexibel"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
