"use client";

import { useEffect, useState } from "react";
import type { City, Service } from "@/types";
import { toast } from "sonner";

export function useCities() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCities = async () => {
    try {
      const res = await fetch("/api/cities");
      if (!res.ok) throw new Error("Failed to fetch services");
      const data = await res.json();
      setCities(data);
    } catch {
      setError("Failed to Load Services");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);
  return { cities, loading, refresh: fetchCities };
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services");
      if (!res.ok) throw new Error("Failed to fetch services");
      const data = await res.json();
      setServices(data);
    } catch {
      setError("Failed to Load Services");
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return { services, loading, refresh: fetchServices };
}
