"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Quote, Trash, Plus, Edit2, Loader2 } from "lucide-react";

import { useApi } from "@/hooks/useApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type TestimonialType = {
  _id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
};

export default function DashboardTestimonials() {
  const { data: testimonials, loading, del, post, patch, refresh } = useApi<TestimonialType[]>("/api/testimonials");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<TestimonialType> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleOpenAdd = () => {
    setEditingItem({ name: "", city: "", rating: 5, text: "", date: new Date().toISOString() });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (item: TestimonialType) => {
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

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="rounded-2xl shadow-xl">
            <CardContent className="p-7 space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-10 w-40" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Kundenbewertungen</h2>
          <p className="text-sm text-muted-foreground">Verwalten Sie die öffentlichen Testimonials Ihrer Kunden.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
            <span className="text-sm font-bold text-orange-500">
              {testimonials?.length || 0} Gesamtbewertungen
            </span>
          </div>
          <Button onClick={handleOpenAdd} className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl">
            <Plus className="h-4 w-4 mr-2" /> Neu erstellen
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((t) => (
          <Card
            key={t._id}
            className="group relative bg-white dark:bg-slate-900 border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-[2rem] overflow-hidden transition-all hover:-translate-y-2 flex flex-col h-full"
          >
            <CardContent className="pt-10 pb-8 px-7 flex flex-col h-full">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-8 w-8 text-slate-900 dark:text-white" />
              </div>

              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${
                      s <= t.rating
                        ? "fill-orange-500 text-orange-500"
                        : "text-slate-200 dark:text-slate-800"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 flex-grow italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm truncate">{t.name}</p>
                    <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">{t.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleOpenEdit(t)}
                    className="w-8 h-8 text-slate-400 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-colors"
                  >
                    <Edit2 size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(t._id)}
                    className="w-8 h-8 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash size={16} />
                  </Button>
                </div>
              </div>

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  {new Date(t.date).toLocaleDateString("de-AT", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-2xl">
          <DialogHeader>
            <DialogTitle>{editingItem?._id ? "Bewertung bearbeiten" : "Neue Bewertung erstellen"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Name</label>
                <Input 
                  value={editingItem?.name || ""} 
                  onChange={(e) => setEditingItem({ ...editingItem!, name: e.target.value })}
                  placeholder="Max Mustermann"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Stadt</label>
                <Input 
                  value={editingItem?.city || ""} 
                  onChange={(e) => setEditingItem({ ...editingItem!, city: e.target.value })}
                  placeholder="Wien"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Bewertung (1-5)</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Button
                    key={s}
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingItem({ ...editingItem!, rating: s })}
                    className={`p-1 h-8 w-8 ${editingItem?.rating === s ? "bg-orange-100 text-orange-600" : ""}`}
                  >
                    <Star className={`h-4 w-4 ${editingItem?.rating && s <= editingItem.rating ? "fill-orange-500 text-orange-500" : "text-slate-300"}`} />
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Text</label>
              <Textarea 
                value={editingItem?.text || ""} 
                onChange={(e) => setEditingItem({ ...editingItem!, text: e.target.value })}
                placeholder="Ihre Bewertung..."
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isSaving}>Abbrechen</Button>
            <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700 text-white" disabled={isSaving}>
              {isSaving && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
              Speichern
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
