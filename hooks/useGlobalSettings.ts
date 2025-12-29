"use client";

import { useApi } from "./useApi";

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
  const { data, loading } = useApi<GlobalSettings>("/api/global-settings");

  const settings = data ? {
    companyName: data?.companyName ?? "",
    phone: data?.phone ?? "",
    email: data?.email ?? "",
    whatsapp: data?.whatsapp ?? "",
    openingHours: data?.openingHours ?? "",
    addressStreet: data?.addressStreet ?? "",
    addressZip: data?.addressZip ?? "",
    addressCity: data?.addressCity ?? "",
  } : null;

  return { settings, loading };
}
