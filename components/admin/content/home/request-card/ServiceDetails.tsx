import { ChevronRight, ArrowUpRight } from "lucide-react";
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
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
          <span className="font-semibold text-gray-900 dark:text-white">
            {moveData?.fromCity}
          </span>
          <ArrowUpRight className="h-4 w-4 text-orange-500" />
          <span className="font-semibold text-gray-900 dark:text-white">
            {moveData?.toCity}
          </span>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {moveData?.estimatedPrice && (
          <div className="bg-orange-50 dark:bg-orange-500/5 p-3 rounded-lg border border-orange-100 dark:border-orange-500/10 mb-4">
            <p className="text-[10px] text-orange-400 font-bold uppercase mb-1">
              Berechneter Preis
            </p>
            <p className="text-xl font-black text-orange-600 dark:text-orange-500">
              € {moveData.estimatedPrice.toLocaleString("de-AT")}
            </p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase mb-1">
              Von
            </p>
            <p className="text-sm font-black text-gray-900 dark:text-white">
              {moveData?.fromCity}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {moveData?.fromAddress}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {moveData?.rooms}
            </p>
          </div>
          <div className="px-4 text-orange-500">
            <ChevronRight className="h-6 w-6" />
          </div>
          <div className="text-center flex-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase mb-1">
              Nach
            </p>
            <p className="text-sm font-black text-gray-900 dark:text-white">
              {moveData?.toCity}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {moveData?.toAddress}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50 dark:border-slate-800">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
              Datum
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {moveData?.moveDate
                ? new Date(moveData.moveDate).toLocaleDateString("de-DE")
                : "Flexibel"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
              Größe
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {moveData?.area ? `${moveData.area} m²` : "K.A."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={isDialog ? "space-y-4" : ""}>
      {!isDialog ? (
        <>
          <label className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase">
            Stadt & Immobilie
          </label>
          <p className="text-sm text-gray-700 dark:text-slate-300 font-medium">
            {clearData?.city} • {clearData?.propertyType}
          </p>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
              Ort
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {clearData?.city}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {clearData?.address}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
              Immobilie
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {clearData?.propertyType}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
              Datum
            </p>
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {clearData?.preferredDate
                ? new Date(clearData.preferredDate).toLocaleDateString("de-DE")
                : "Flexibel"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
