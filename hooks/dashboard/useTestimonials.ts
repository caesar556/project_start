import { useState } from "react";
import { useApi } from "../useApi";
import { toast } from "sonner";
import type { Testimonial } from "@/types";

export function useTestimonials() {
  const {
    data: testimonials,
    loading,
    del,
    post,
    patch,
    refresh,
  } = useApi<Testimonial[]>("/api/testimonials");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<Testimonial> | null>(
    null,
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleOpenAdd = () => {
    setEditingItem({
      name: "",
      city: "",
      rating: 5,
      text: "",
      date: new Date().toISOString(),
    });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (item: Testimonial) => {
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    if (!editingItem?.name || !editingItem?.text) {
      toast.error("Name und Text sind erforderlich");
      return;
    }

    setIsSaving(true);
    try {
      if (editingItem._id) {
        await patch(editingItem._id, editingItem);
        toast.success("Testimonial aktualisiert");
      } else {
        await post(editingItem);
        toast.success("Testimonial erstellt");
      }
      setIsDialogOpen(false);
      refresh();
    } catch (err) {
      toast.error("Fehler beim Speichern");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Möchten Sie dieses Testimonial wirklich löschen?")) return;

    try {
      await del(id);
      toast.success("Testimonial gelöscht");
    } catch (err) {
      toast.error("Fehler beim Löschen");
    }
  };

  return {
    testimonials,
    loading,
    isDialogOpen,
    editingItem,
    isSaving,
    handleDelete,
    handleOpenAdd,
    handleOpenEdit,
    handleSave,
    setEditingItem,
    setIsDialogOpen
  };
}
