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

type ServiceType = {
  _id: string;
  title: string;
  description: string;
};

export default function ServiceManager() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<ServiceType[]>([]);
  const [fetching, setFetching] = useState(false);

  // fetch services
  const fetchServices = async () => {
    setFetching(true);
    const res = await fetch("/api/services");
    const data = await res.json();
    setServices(data);
    setFetching(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // add service
  const handleSubmit = async () => {
    if (!title || !description) return alert("Title and description required");

    setLoading(true);
    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) throw new Error("Failed to add service");

      alert("Service added successfully!");
      setTitle("");
      setDescription("");
      fetchServices();
    } catch (err) {
      console.error(err);
      alert("Error adding service");
    } finally {
      setLoading(false);
    }
  };

  // delete service
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete service");

      setServices(services.filter((s) => s._id !== id));
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

        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add Service"}
        </Button>
      </div>

      {/* Services List */}
      <div>
        <h2 className="text-lg font-bold mb-4">All Services</h2>
        {fetching ? (
          <p>Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
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
