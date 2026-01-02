import { ClearanceRequest, MoveRequest, RequestStatus } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  data: MoveRequest | ClearanceRequest;
  type: "move" | "clearance";
}

export function useRequests({ data, type, onUpdate }: Props & { onUpdate?: () => void }) {
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

  return {
    isOpen,
    setIsOpen,
    isUpdating,
    handleStatusUpdate,
    handleDelete
  };
}
