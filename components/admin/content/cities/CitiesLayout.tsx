"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { City } from "@/types";
import { Edit, Trash } from "lucide-react";

import { useApi } from "@/hooks/useApi";

export default function CitiesAdmin() {
  const { data: cities, loading, refresh: fetchCities, post, del, put } = useApi<City[]>("/api/cities");
  const [search, setSearch] = useState("");
  const [editingCity, setEditingCity] = useState<City | null>(null);
  const [newCity, setNewCity] = useState<Omit<City, "_id">>({
    name: "",
    slug: "",
    introText: "",
    distance: 0,
    priceMin: 0,
    priceMax: 0,
  });

  const deleteCity = async (id: string) => {
    await del(id);
  };

  const addCity = async () => {
    await post(newCity);
    setNewCity({
      name: "",
      slug: "",
      introText: "",
      distance: 0,
      priceMin: 0,
      priceMax: 0,
    });
  };

  const updateCity = async () => {
    if (!editingCity) return;
    await fetch(`/api/cities/${editingCity._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingCity),
    });
    setEditingCity(null);
    fetchCities();
  };

  const filteredCities = (cities || []).filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cities Admin</h1>

      {/* Search */}
      <Input
        placeholder="Search by city name..."
        className="mb-4 max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add City Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4 bg-orange-700 text-white  ml-6">
            Add New City
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md bg-black/70 text-white border-none">
          <DialogHeader>
            <DialogTitle>Add New City</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-4">
            <Input
              placeholder="Name"
              value={newCity.name}
              onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
            />
            <Input
              placeholder="Slug"
              value={newCity.slug}
              onChange={(e) => setNewCity({ ...newCity, slug: e.target.value })}
            />
            <Input
              placeholder="Intro Text"
              value={newCity.introText}
              onChange={(e) =>
                setNewCity({ ...newCity, introText: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Distance"
              value={newCity.distance}
              onChange={(e) =>
                setNewCity({ ...newCity, distance: Number(e.target.value) })
              }
            />
            <Input
              type="number"
              placeholder="Price Min"
              value={newCity.priceMin}
              onChange={(e) =>
                setNewCity({ ...newCity, priceMin: Number(e.target.value) })
              }
            />
            <Input
              type="number"
              placeholder="Price Max"
              value={newCity.priceMax}
              onChange={(e) =>
                setNewCity({ ...newCity, priceMax: Number(e.target.value) })
              }
            />
            <Button size="lg" className="bg-orange-700" onClick={addCity}>
              Add City
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit City Dialog */}
      <Dialog
        open={!!editingCity}
        onOpenChange={(open) => !open && setEditingCity(null)}
      >
        <DialogContent className="max-w-md bg-black/70 text-white border-none">
          <DialogHeader>
            <DialogTitle className="text-lg text-center">Edit City</DialogTitle>
          </DialogHeader>
          {editingCity && (
            <div className="space-y-6 mt-4">
              <Input
                placeholder="Name"
                value={editingCity.name}
                onChange={(e) =>
                  setEditingCity({ ...editingCity, name: e.target.value })
                }
              />
              <Input
                placeholder="Slug"
                value={editingCity.slug}
                onChange={(e) =>
                  setEditingCity({ ...editingCity, slug: e.target.value })
                }
              />
              <Input
                placeholder="Intro Text"
                value={editingCity.introText}
                onChange={(e) =>
                  setEditingCity({ ...editingCity, introText: e.target.value })
                }
              />
              <Input
                type="number"
                placeholder="Distance"
                value={editingCity.distance}
                onChange={(e) =>
                  setEditingCity({
                    ...editingCity,
                    distance: Number(e.target.value),
                  })
                }
              />
              <Input
                type="number"
                placeholder="Price Min"
                value={editingCity.priceMin}
                onChange={(e) =>
                  setEditingCity({
                    ...editingCity,
                    priceMin: Number(e.target.value),
                  })
                }
              />
              <Input
                type="number"
                placeholder="Price Max"
                value={editingCity.priceMax}
                onChange={(e) =>
                  setEditingCity({
                    ...editingCity,
                    priceMax: Number(e.target.value),
                  })
                }
              />
              <Button size="lg" className="bg-orange-700 " onClick={updateCity}>
                Update City
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Slug</th>
              <th className="px-4 py-2 border">Distance</th>
              <th className="px-4 py-2 border">Price Min</th>
              <th className="px-4 py-2 border">Price Max</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.map((city) => (
              <tr key={city._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-orange-600">
                  {city.name}
                </td>
                <td className="px-4 py-2 border">{city.slug}</td>
                <td className="px-4 py-2 border">{city.distance}</td>

                <td className="px-4 py-2 border">{city.priceMin}</td>
                <td className="px-4 py-2 border">{city.priceMax}</td>

                <td className="px-4 py-2 border flex gap-2">
                  <Button size="sm" onClick={() => setEditingCity(city)}>
                    <Edit />
                  </Button>
                  <Button
                    size="sm"
                    variant="link"
                    onClick={() => deleteCity(city._id)}
                  >
                    <Trash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
