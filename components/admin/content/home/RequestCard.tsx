import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RequestStatus, RequestsProps } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { StatusBadge, getStatusColor } from "./request-card/StatusBadge";
import { ContactInfo } from "./request-card/ContactInfo";
import { ServiceDetails } from "./request-card/ServiceDetails";
import { ActionButtons } from "./request-card/ActionButtons";

export function RequestCard({ data, type, onUpdate }: RequestsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusUpdate = async (newStatus: RequestStatus) => {
    setIsUpdating(true);
    try {
      const endpoint =
        type === "move"
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

  const handleDelete = async () => {
    try {
      const endpoint =
        type === "move"
          ? `/api/move-requests/${data._id}`
          : `/api/clear-requests/${data._id}`;

      const res = await fetch(endpoint, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      toast.success("Anfrage gelöscht");
      setIsOpen(false);
      onUpdate?.();
    } catch (error) {
      toast.error("Fehler beim Löschen der Anfrage");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card className="group border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
        <CardHeader className="flex flex-row justify-between items-start bg-gray-50/50 dark:bg-slate-800/50 px-4 py-4">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {data.firstName} {data.lastName}
            </CardTitle>
            <p className="text-xs text-gray-500 dark:text-slate-400 font-medium">
              ID: {data._id.slice(-6).toUpperCase()}
            </p>
          </div>

          <StatusBadge status={data.status} />
        </CardHeader>

        <CardContent className="space-y-4 px-4 py-4">
          <ContactInfo email={data.email} phone={data.phone} />

          <div className="pt-2 border-t border-gray-100 dark:border-slate-800">
            <ServiceDetails data={data} type={type} />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-[10px] text-gray-400 dark:text-slate-500 font-medium italic flex items-center gap-1">
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

      <DialogContent className="sm:max-w-[600px] w-[95vw] max-h-[90vh] overflow-y-auto border-none dark:bg-slate-900 px-0 py-4 rounded-2xl shadow-2xl flex flex-col ">
        <DialogHeader className="bg-orange-500 text-white p-6 ">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl font-black">
                Anfragedetails
              </DialogTitle>
              <p className="text-orange-100 text-sm mt-1 font-medium">
                {type === "move" ? "Umzugsservice" : "Entrümpelungsservice"} •
                ID: {data._id.toUpperCase()}
              </p>
            </div>
            <StatusBadge
              status={data.status}
              className={cn(
                "bg-white/20 hover:bg-white/30 border-none text-white font-bold",
                getStatusColor(data.status),
              )}
            />
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6 flex-1 bg-gray-50 dark:bg-slate-950/50">
          <section className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
            <h3 className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Kontaktinformationen
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
                  Name
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {data.firstName} {data.lastName}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
                  Telefon
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {data.phone}
                </p>
              </div>
              <div className="col-span-2 space-y-1">
                <p className="text-[10px] text-gray-400 dark:text-slate-500 font-bold uppercase">
                  Email
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {data.email}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
            <h3 className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Service Details
            </h3>
            <ServiceDetails data={data} type={type} isDialog />
          </section>

          {data.message && (
            <section className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
              <h3 className="text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <MessageSquare className="h-3 w-3" /> Nachricht
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed bg-gray-50 dark:bg-slate-950/50 p-3 rounded-lg border border-gray-100 dark:border-slate-800 italic">
                "{data.message}"
              </p>
            </section>
          )}
        </div>

        <ActionButtons
          status={data.status}
          isUpdating={isUpdating}
          onUpdate={handleStatusUpdate}
          onDelete={handleDelete}
        />
      </DialogContent>
    </Dialog>
  );
}