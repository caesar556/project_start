import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Loader2, RefreshCw, XCircle, CheckCircle2 } from "lucide-react";
import type { RequestStatus } from "@/types";

interface ActionButtonsProps {
  status: RequestStatus;
  isUpdating: boolean;
  onUpdate: (status: RequestStatus) => void;
}

export function ActionButtons({ status, isUpdating, onUpdate }: ActionButtonsProps) {
  return (
    <DialogFooter className="p-6 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3 sm:gap-3 ">
      <div className="flex w-full gap-3">
        <Button
          variant="outline"
          className="flex-1 border-yellow-200 dark:border-yellow-500/20 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-500/10 font-bold rounded-xl h-12"
          onClick={() => onUpdate("processing")}
          disabled={isUpdating || status === "processing"}
        >
          {isUpdating ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          In Bearbeitung
        </Button>
      </div>
      <div className="flex w-full gap-3">
        <Button
          variant="outline"
          className="flex-1 border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-500 hover:bg-red-50 font-bold rounded-xl h-12"
          onClick={() => onUpdate("cancelled")}
          disabled={isUpdating || status === "cancelled"}
        >
          {isUpdating ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <XCircle className="h-4 w-4 mr-2" />
          )}
          Stornieren
        </Button>
        <Button
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl h-12"
          onClick={() => onUpdate("completed")}
          disabled={isUpdating || status === "completed"}
        >
          {isUpdating ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <CheckCircle2 className="h-4 w-4 mr-2" />
          )}
          Abschließen
        </Button>
      </div>
    </DialogFooter>
  );
}
