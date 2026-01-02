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
  DialogFooter,
} from "@/components/ui/dialog";
import { City } from "@/types";
import { Edit, Trash, Plus, Search, MapPin, Navigation, DollarSign, Info } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
    if (confirm("Are you sure you want to delete this city?")) {
      await del(id);
    }
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
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cities Management</h1>
          <p className="text-muted-foreground">Manage locations, pricing, and distance details for your service area.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20 text-white">
              <Plus className="mr-2 h-4 w-4" /> Add New City
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-black/70 text-white border-none shadow-lg">
            <DialogHeader>
              <DialogTitle>Add New City</DialogTitle>
              <CardDescription>Fill in the details to add a new service location.</CardDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">City Name</label>
                <Input
                  placeholder="e.g. New York"
                  value={newCity.name}
                  onChange={(e) => setNewCity({ ...newCity, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Slug</label>
                <Input
                  placeholder="e.g. new-york"
                  value={newCity.slug}
                  onChange={(e) => setNewCity({ ...newCity, slug: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Intro Text</label>
                <Input
                  placeholder="Brief description..."
                  value={newCity.introText}
                  onChange={(e) => setNewCity({ ...newCity, introText: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Distance (km)</label>
                  <Input
                    type="number"
                    value={newCity.distance}
                    onChange={(e) => setNewCity({ ...newCity, distance: Number(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Min Price</label>
                  <Input
                    type="number"
                    value={newCity.priceMin}
                    onChange={(e) => setNewCity({ ...newCity, priceMin: Number(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Max Price</label>
                  <Input
                    type="number"
                    value={newCity.priceMax}
                    onChange={(e) => setNewCity({ ...newCity, priceMax: Number(e.target.value) })}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-orange-600 hover:bg-orange-700 w-full" onClick={addCity}>
                Create City
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-none shadow-sm bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cities..."
                className="pl-9 bg-background/50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              {filteredCities.length} Total
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border bg-background overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 transition-colors">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">City</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Slug</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Details</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Pricing</th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {filteredCities.map((city) => (
                    <tr key={city._id} className="border-b transition-colors hover:bg-muted/30">
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950/30">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold">{city.name}</div>
                            <div className="text-xs text-muted-foreground line-clamp-1 max-w-[200px]">{city.introText}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 align-middle font-mono text-xs text-muted-foreground">
                        /{city.slug}
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Navigation className="h-3 w-3" />
                          <span>{city.distance} km</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5 text-orange-600 font-medium">
                            <DollarSign className="h-3 w-3" />
                            <span>${city.priceMin} - ${city.priceMax}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={() => setEditingCity(city)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            onClick={() => deleteCity(city._id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredCities.length === 0 && (
                <div className="py-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Search className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-lg font-medium">No cities found</p>
                    <p className="text-sm text-muted-foreground">Try adjusting your search terms.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={!!editingCity}
        onOpenChange={(open) => !open && setEditingCity(null)}
      >
        <DialogContent className="max-w-md bg-slate-800 text-white border-none">
          <DialogHeader>
            <DialogTitle>Edit City</DialogTitle>
            <CardDescription>Update details for {editingCity?.name}.</CardDescription>
          </DialogHeader>
          {editingCity && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">City Name</label>
                <Input
                  value={editingCity.name}
                  onChange={(e) => setEditingCity({ ...editingCity, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Slug</label>
                <Input
                  value={editingCity.slug}
                  onChange={(e) => setEditingCity({ ...editingCity, slug: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Intro Text</label>
                <Input
                  value={editingCity.introText}
                  onChange={(e) => setEditingCity({ ...editingCity, introText: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Distance (km)</label>
                  <Input
                    type="number"
                    value={editingCity.distance}
                    onChange={(e) => setEditingCity({ ...editingCity, distance: Number(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Min Price</label>
                  <Input
                    type="number"
                    value={editingCity.priceMin}
                    onChange={(e) => setEditingCity({ ...editingCity, priceMin: Number(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Max Price</label>
                  <Input
                    type="number"
                    value={editingCity.priceMax}
                    onChange={(e) => setEditingCity({ ...editingCity, priceMax: Number(e.target.value) })}
                  />
                </div>
              </div>
              <DialogFooter className="mt-4">
                <Button className="bg-orange-600 hover:bg-orange-700 w-full" onClick={updateCity}>
                  Save Changes
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
