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
import { Trash, Pencil, Check, X } from "lucide-react";

import { useApi } from "@/hooks/useApi";
import { toast } from "sonner";

type ServiceType = {
  _id: string;
  title: string;
  description: string;
};

export default function ServiceManager() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

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
      await post({ title, description });
      toast.success("Service added successfully");
      setTitle("");
      setDescription("");
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
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
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
                        <CardTitle>{service.title}</CardTitle>
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
