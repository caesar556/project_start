"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Pencil, Check, X, Home, Building2, Trash2, Package, Wrench, Warehouse, Music, Heart } from "lucide-react";

import { useApi } from "@/hooks/useApi";
import { toast } from "sonner";

const icons = [
  { name: "Home", icon: Home },
  { name: "Building2", icon: Building2 },
  { name: "Trash2", icon: Trash2 },
  { name: "Package", icon: Package },
  { name: "Wrench", icon: Wrench },
  { name: "Warehouse", icon: Warehouse },
  { name: "Music", icon: Music },
  { name: "Heart", icon: Heart },
];

type ServiceType = {
  _id: string;
  title: string;
  description: string;
  icon: string;
};

export default function ServiceManager() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("Package");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editIcon, setEditIcon] = useState("Package");

  const {
    data: services = [],
    loading: fetching,
    post,
    del,
    put,
  } = useApi<ServiceType[]>("/api/services");

  const [adding, setAdding] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    if (!title || !description) {
      toast.warning("Title and description are required");
      return;
    }

    setAdding(true);
    try {
      await post({ title, description, icon });
      toast.success("Service added successfully");
      setTitle("");
      setDescription("");
      setIcon("Package");
    } catch {
      toast.error("Failed to add service");
    } finally {
      setAdding(false);
    }
  };

  const startEdit = (service: ServiceType) => {
    setEditingId(service._id);
    setEditTitle(service.title);
    setEditDescription(service.description);
    setEditIcon(service.icon || "Package");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
    setEditIcon("Package");
  };

  const saveEdit = async (id: string) => {
    if (!editTitle || !editDescription) {
      toast.warning("Title and description are required");
      return;
    }

    setSaving(true);
    try {
      await put(id, {
        title: editTitle,
        description: editDescription,
        icon: editIcon,
      });
      toast.success("Service updated");
      cancelEdit();
    } catch {
      toast.error("Failed to update service");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      await del(id);
      toast.success("Service deleted");
    } catch {
      toast.error("Failed to delete service");
    }
  };

  return (
    <div className="space-y-10">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Add New Service</CardTitle>
          <CardDescription>
            Create a new service that will appear on the website
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              placeholder="Service title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Service description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Icon</Label>
            <div className="flex flex-wrap gap-2 p-2 border rounded-md">
              {icons.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIcon(item.name)}
                  className={`p-2 rounded-md transition-colors ${
                    icon === item.name
                      ? "bg-orange-500 text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  title={item.name}
                >
                  <item.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleSubmit} disabled={adding}>
            {adding ? "Adding..." : "Add Service"}
          </Button>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-lg font-bold mb-4">All Services</h2>

        {fetching ? (
          <p className="text-muted-foreground">Loading services...</p>
        ) : services?.length === 0 ? (
          <p className="text-muted-foreground">No services added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => {
              const isEditing = editingId === service._id;

              return (
                <Card
                  key={service._id}
                  className="relative hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6 space-y-3">
                    {isEditing ? (
                      <>
                        <Input
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                        />

                        <Textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                        />

                        <div className="space-y-1">
                          <Label className="text-xs">Icon</Label>
                          <div className="flex flex-wrap gap-1">
                            {icons.map((item) => (
                              <button
                                key={item.name}
                                type="button"
                                onClick={() => setEditIcon(item.name)}
                                className={`p-1.5 rounded-md transition-colors ${
                                  editIcon === item.name
                                    ? "bg-orange-500 text-white"
                                    : "bg-secondary hover:bg-secondary/80"
                                }`}
                                title={item.name}
                              >
                                <item.icon size={14} />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => saveEdit(service._id)}
                            disabled={saving}
                          >
                            <Check size={16} />
                            Save
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={cancelEdit}
                          >
                            <X size={16} />
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start justify-between">
                          <CardTitle>{service.title}</CardTitle>
                          <div className="p-2 bg-orange-500/10 rounded-lg">
                            {(() => {
                              const Icon = icons.find(i => i.name === service.icon)?.icon || Package;
                              return <Icon size={20} className="text-orange-500" />;
                            })()}
                          </div>
                        </div>
                        <CardDescription>{service.description}</CardDescription>

                        <div className="flex justify-end gap-2 pt-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => startEdit(service)}
                          >
                            <Pencil size={16} />
                          </Button>

                          <Button
                            size="icon"
                            variant="destructive"
                            onClick={() => handleDelete(service._id)}
                          >
                            <Trash size={16} />
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
