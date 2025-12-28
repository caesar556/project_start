"use client";

import { useEffect, useState } from "react";

export type GlobalSettings = {
  companyName: string;
  phone: string;
  email: string;
  whatsapp: string;
  openingHours: string;
  addressStreet?: string;
  addressZip?: string;
  addressCity?: string;
};

export function useGlobalSettings() {
  const [settings, setSettings] = useState<GlobalSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/global-settings", {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();

        if (mounted) {
          setSettings({
            companyName: data?.companyName ?? "",
            phone: data?.phone ?? "",
            email: data?.email ?? "",
            whatsapp: data?.whatsapp ?? "",
            openingHours: data?.openingHours ?? "",
            addressStreet: data?.addressStreet ?? "",
            addressZip: data?.addressZip ?? "",
            addressCity: data?.addressCity ?? "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch global settings", error);
      } finally {
        mounted && setLoading(false);
      }
    };

    fetchSettings();

    return () => {
      mounted = false;
    };
  }, []);

  return { settings, loading };
}
