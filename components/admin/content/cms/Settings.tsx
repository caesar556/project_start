"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
} from "@/components/ui/form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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

  /* -------- Fetch settings -------- */
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

  /* -------- Submit -------- */
  const onSubmit = async (values: GlobalSettingFormValues) => {
    try {
      setLoading(true);
      await fetch("/api/global-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error("Failed to save settings", error);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="text-sm text-muted-foreground">Loading...</div>;
  }

  return (
    <Card className="max-w-4xl bg-orange-700/10 shadow-lg">
      <CardHeader>
        <CardTitle>Global Website Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {/* Company Info */}
            <Section title="Company Information">
              <TwoCols>
                <InputField
                  form={form}
                  name="companyName"
                  label="Company Name"
                />
                <InputField form={form} name="phone" label="Phone" />
                <InputField form={form} name="email" label="Email" />
                <InputField form={form} name="whatsapp" label="WhatsApp" />
              </TwoCols>
            </Section>

            {/* Address */}
            <Section title="Address">
              <TwoCols>
                <InputField form={form} name="addressStreet" label="Street" />
                <InputField form={form} name="addressZip" label="ZIP Code" />
                <InputField form={form} name="addressCity" label="City" />
              </TwoCols>
            </Section>

            {/* Footer */}
            <Section title="Footer">
              <TwoCols>
                <InputField
                  form={form}
                  name="openingHours"
                  label="Opening Hours"
                />
              </TwoCols>
            </Section>

            <Button
              className="bg-orange-800 text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Settings"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

/* ---------- Helpers ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <Separator />
      {children}
    </div>
  );
}

function TwoCols({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}

function InputField({
  form,
  name,
  label,
}: {
  form: any;
  name: keyof GlobalSettingFormValues;
  label: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
