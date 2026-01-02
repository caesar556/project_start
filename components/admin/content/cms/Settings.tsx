"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Building2, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Save, 
  Settings as SettingsIcon,
  Globe,
  Info
} from "lucide-react";

import {
  globalSettingSchema,
  GlobalSettingFormValues,
} from "@/lib/validation/global-setting";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { InputField } from "./SettingsField";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const form = useForm<GlobalSettingFormValues>({
    resolver: zodResolver(globalSettingSchema),
    defaultValues: {
      companyName: "",
      phone: "",
      email: "",
      whatsapp: "",
      addressStreet: "",
      addressZip: "",
      addressCity: "",
      openingHours: "",
    },
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/global-settings");
        if (!res.ok) return;

        const data = await res.json();

        form.reset({
          companyName: data?.companyName ?? "",
          phone: data?.phone ?? "",
          email: data?.email ?? "",
          whatsapp: data?.whatsapp ?? "",
          addressStreet: data?.addressStreet ?? "",
          addressZip: data?.addressZip ?? "",
          addressCity: data?.addressCity ?? "",
          openingHours: data?.openingHours ?? "",
        });
      } catch (error) {
        console.error("Failed to load settings", error);
      } finally {
        setFetching(false);
      }
    };

    fetchSettings();
  }, [form]);

  const onSubmit = async (values: GlobalSettingFormValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/global-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!res.ok) throw new Error();
      
      toast.success("Einstellungen erfolgreich gespeichert");
    } catch (error) {
      toast.error("Fehler beim Speichern der Einstellungen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/20">
            <SettingsIcon className="h-6 w-6 text-white" />
          </div>
          System-Einstellungen
        </h1>
        <p className="text-gray-500 dark:text-slate-400 font-medium">
          Verwalten Sie hier die globalen Informationen Ihres Unternehmens.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="bg-gray-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
              <TabsTrigger value="company" className="rounded-lg px-6 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">
                <Building2 className="h-4 w-4 mr-2" /> Unternehmen
              </TabsTrigger>
              <TabsTrigger value="contact" className="rounded-lg px-6 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">
                <Globe className="h-4 w-4 mr-2" /> Kontakt & Adresse
              </TabsTrigger>
              <TabsTrigger value="extra" className="rounded-lg px-6 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">
                <Clock className="h-4 w-4 mr-2" /> Geschäftszeiten
              </TabsTrigger>
            </TabsList>

            <TabsContent value="company" className="mt-0 space-y-6">
              <Card className="border-none shadow-xl shadow-gray-200/50 dark:shadow-none dark:bg-slate-900 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gray-50/50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">Unternehmensdaten</CardTitle>
                      <CardDescription>Basis-Informationen Ihrer Firma</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField
                      form={form}
                      name="companyName"
                      label="Firmenname"
                      icon={<Building2 className="h-4 w-4" />}
                      placeholder="z.B. Richard Umzug"
                    />
                    <InputField
                      form={form}
                      name="email"
                      label="E-Mail Adresse"
                      icon={<Mail className="h-4 w-4" />}
                      placeholder="office@richard-umzug.at"
                    />
                    <InputField
                      form={form}
                      name="phone"
                      label="Telefonnummer"
                      icon={<Phone className="h-4 w-4" />}
                      placeholder="+43 664 ..."
                    />
                    <InputField
                      form={form}
                      name="whatsapp"
                      label="WhatsApp Nummer"
                      icon={<MessageCircle className="h-4 w-4" />}
                      placeholder="+43 664 ..."
                      description="Wird für den direkten Chat-Button verwendet."
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-0 space-y-6">
              <Card className="border-none shadow-xl shadow-gray-200/50 dark:shadow-none dark:bg-slate-900 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gray-50/50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">Standort</CardTitle>
                      <CardDescription>Adresse und Kontaktdetails</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                       <InputField
                        form={form}
                        name="addressStreet"
                        label="Straße & Hausnummer"
                        icon={<MapPin className="h-4 w-4" />}
                      />
                    </div>
                    <InputField
                      form={form}
                      name="addressZip"
                      label="Postleitzahl"
                    />
                    <InputField
                      form={form}
                      name="addressCity"
                      label="Stadt"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="extra" className="mt-0 space-y-6">
              <Card className="border-none shadow-xl shadow-gray-200/50 dark:shadow-none dark:bg-slate-900 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gray-50/50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">Öffnungszeiten</CardTitle>
                      <CardDescription>Wann Sie für Kunden erreichbar sind</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                   <InputField
                      form={form}
                      name="openingHours"
                      label="Geschäftszeiten"
                      icon={<Clock className="h-4 w-4" />}
                      placeholder="Mo-Fr: 08:00 - 18:00, Sa: 09:00 - 14:00"
                    />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-end gap-4 p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-lg">
            <div className="mr-auto hidden md:flex items-center gap-2 text-gray-500 dark:text-slate-400 text-sm">
              <Info className="h-4 w-4" />
              <span>Änderungen werden sofort auf der Website sichtbar.</span>
            </div>
            <Button
              variant="outline"
              type="button"
              onClick={() => form.reset()}
              disabled={loading}
              className="rounded-xl px-6"
            >
              Abbrechen
            </Button>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl px-8 shadow-lg shadow-orange-600/20 h-12"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Speichere...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Einstellungen speichern
                </div>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
