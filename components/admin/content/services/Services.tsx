"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Trash } from "lucide-react";

import { useApi } from "@/hooks/useApi";

type ServiceType = {
  _id: string;
  title: string;
  description: string;
};

export default function ServiceManager() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data: services, loading: fetching, post, del } = useApi<ServiceType[]>("/api/services");
  const [adding, setAdding] = useState(false);

  // add service
  const handleSubmit = async () => {
    if (!title || !description) return alert("Title and description required");

    setAdding(true);
    try {
      await post({ title, description });
      alert("Service added successfully!");
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Error adding service");
    } finally {
      setAdding(false);
    }
  };

  // delete service
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      await del(id);
    } catch (err) {
      console.error(err);
      alert("Error deleting service");
    }
  };

  return (
    <div className="space-y-8">
      {/* Add Service Form */}
      <div className="space-y-4 p-4 border rounded-md">
        <h2 className="text-lg font-bold">Add New Service</h2>

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
          <Input
            placeholder="Service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button onClick={handleSubmit} disabled={adding}>
          {adding ? "Adding..." : "Add Service"}
        </Button>
      </div>

      {/* Services List */}
      <div>
        <h2 className="text-lg font-bold mb-4">All Services</h2>
        {fetching ? (
          <p>Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services?.map((service) => (
              <Card key={service._id} className="relative">
                <CardContent>
                  <CardTitle className="mb-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>

                  <Button
                    variant="link"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => handleDelete(service._id)}
                  >
                    <Trash size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
