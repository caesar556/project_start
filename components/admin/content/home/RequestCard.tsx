import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Building2,
  MessageSquare,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  MoveRequest,
  ClearanceRequest,
  RequestStatus,
} from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  data: MoveRequest | ClearanceRequest;
  type: "move" | "clearance";
  onUpdate?: () => void;
};

const getStatusColor = (status: RequestStatus) => {
  switch (status) {
    case "new":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "processing":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "completed":
      return "bg-green-100 text-green-700 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getStatusIcon = (status: RequestStatus) => {
  switch (status) {
    case "new":
      return <Clock className="h-3 w-3 mr-1" />;
    case "processing":
      return <RefreshCw className="h-3 w-3 mr-1" />;
    case "completed":
      return <CheckCircle2 className="h-3 w-3 mr-1" />;
    case "cancelled":
      return <XCircle className="h-3 w-3 mr-1" />;
    default:
      return null;
  }
};

export function RequestCard({ data, type, onUpdate }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusUpdate = async (newStatus: RequestStatus) => {
    setIsUpdating(true);
    try {
      const endpoint = type === "move" 
        ? `/api/move-requests/${data._id}` 
        : `/api/clear-requests/${data._id}`;

      const res = await fetch(endpoint, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Update failed");

      toast.success(`Status auf ${newStatus} aktualisiert`);
      onUpdate?.();
    } catch (error) {
      toast.error("Fehler beim Aktualisieren des Status");
    } finally {
      setIsUpdating(false);
    }
  };

  const moveData = type === "move" ? (data as MoveRequest) : null;
  const clearData = type === "clearance" ? (data as ClearanceRequest) : null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card className="group border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-white">
        <CardHeader className="flex flex-row justify-between items-start bg-gray-50/50 px-4 py-4">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
              {data.firstName} {data.lastName}
            </CardTitle>
            <p className="text-xs text-gray-500 font-medium">
              ID: {data._id.slice(-6).toUpperCase()}
            </p>
          </div>

          <Badge
            variant="secondary"
            className={cn(
              "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
              getStatusColor(data.status)
            )}
          >
            {getStatusIcon(data.status)}
            {data.status}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4 px-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1">
                <Mail className="h-2.5 w-2.5" /> Email
              </label>
              <p className="text-sm text-gray-700 font-medium truncate">
                {data.email}
              </p>
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1">
                <Phone className="h-2.5 w-2.5" /> Telefon
              </label>
              <p className="text-sm text-gray-700 font-medium">{data.phone}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            {type === "move" ? (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {moveData?.fromCity}
                </span>
                <ArrowUpRight className="h-4 w-4 text-orange-500" />
                <span className="font-semibold text-gray-900">
                  {moveData?.toCity}
                </span>
              </div>
            ) : (
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase">
                  Stadt & Immobilie
                </label>
                <p className="text-sm text-gray-700 font-medium">
                  {clearData?.city} • {clearData?.propertyType}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-[10px] text-gray-400 font-medium italic flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5" />
              {new Date(data.createdAt).toLocaleDateString("de-DE")}
            </div>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-8 px-4 rounded-lg shadow-sm transition-transform active:scale-95"
              >
                Details
              </Button>
            </DialogTrigger>
          </div>
        </CardContent>
      </Card>

      <DialogContent className="sm:max-w-[600px] w-[95vw] max-h-[90vh] overflow-y-auto border-none  px-0 py-4   rounded-2xl shadow-2xl flex flex-col ">
        <DialogHeader className="bg-orange-500 text-white p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl font-black">Anfragedetails</DialogTitle>
              <p className="text-orange-100 text-sm mt-1 font-medium">
                {type === "move" ? "Umzugsservice" : "Entrümpelungsservice"} • ID: {data._id.toUpperCase()}
              </p>
            </div>
            <Badge className={cn("bg-white/20 hover:bg-white/30 border-none text-white font-bold", getStatusColor(data.status))}>
              {data.status}
            </Badge>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6 flex-1 bg-gray-50">
          <section className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Kontaktinformationen</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Name</p>
                <p className="text-sm font-bold text-gray-900">{data.firstName} {data.lastName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Telefon</p>
                <p className="text-sm font-bold text-gray-900">{data.phone}</p>
              </div>
              <div className="col-span-2 space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Email</p>
                <p className="text-sm font-bold text-gray-900">{data.email}</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Service Details</h3>
            {type === "move" ? (
              <div className="space-y-4">
                {moveData?.estimatedPrice && (
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 mb-4">
                    <p className="text-[10px] text-orange-400 font-bold uppercase mb-1">Berechneter Preis</p>
                    <p className="text-xl font-black text-orange-600">€ {moveData.estimatedPrice.toLocaleString("de-AT")}</p>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Von</p>
                    <p className="text-sm font-black text-gray-900">{moveData?.fromCity}</p>
                    <p className="text-xs text-gray-500">{moveData?.fromAddress}</p>
                  </div>
                  <div className="px-4 text-orange-500">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Nach</p>
                    <p className="text-sm font-black text-gray-900">{moveData?.toCity}</p>
                    <p className="text-xs text-gray-500">{moveData?.toAddress}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Datum</p>
                    <p className="text-sm font-bold text-gray-900">{moveData?.moveDate ? new Date(moveData.moveDate).toLocaleDateString("de-DE") : "Flexibel"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Größe</p>
                    <p className="text-sm font-bold text-gray-900">{moveData?.area ? `${moveData.area} m²` : "K.A."}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Ort</p>
                    <p className="text-sm font-bold text-gray-900">{clearData?.city}</p>
                    <p className="text-xs text-gray-500">{clearData?.address}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Immobilie</p>
                    <p className="text-sm font-bold text-gray-900">{clearData?.propertyType}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Datum</p>
                    <p className="text-sm font-bold text-gray-900">{clearData?.preferredDate ? new Date(clearData.preferredDate).toLocaleDateString("de-DE") : "Flexibel"}</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {data.message && (
            <section className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <MessageSquare className="h-3 w-3" /> Nachricht
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
                "{data.message}"
              </p>
            </section>
          )}
        </div>

        <DialogFooter className="p-6 bg-white border-t border-gray-100 flex flex-col gap-3 sm:gap-3 ">
          <div className="flex w-full gap-3">
            <Button
              variant="outline"
              className="flex-1 border-yellow-200 text-yellow-600 hover:bg-yellow-50 font-bold rounded-xl h-12"
              onClick={() => handleStatusUpdate("processing")}
              disabled={isUpdating || data.status === "processing"}
            >
              {isUpdating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
              In Bearbeitung
            </Button>
          </div>
          <div className="flex w-full gap-3">
            <Button
              variant="outline"
              className="flex-1 border-red-200 text-red-600 hover:bg-red-50 font-bold rounded-xl h-12"
              onClick={() => handleStatusUpdate("cancelled")}
              disabled={isUpdating || data.status === "cancelled"}
            >
              {isUpdating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <XCircle className="h-4 w-4 mr-2" />}
              Stornieren
            </Button>
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl h-12"
              onClick={() => handleStatusUpdate("completed")}
              disabled={isUpdating || data.status === "completed"}
            >
              {isUpdating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <CheckCircle2 className="h-4 w-4 mr-2" />}
              Abschließen
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}