"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  globalSettingSchema,
  GlobalSettingFormValues,
} from "@/lib/validation/global-setting";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(false);

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
      footerCopyrightText: "",
      attributionLabel: "",
      attributionUrl: "",
    },
  });

  /** Fetch existing settings */
  useEffect(() => {
    const fetchSettings = async () => {
      const res = await fetch("/api/admin/settings");
      if (!res.ok) return;
      const data = await res.json();
      form.reset(data);
    };
    fetchSettings();
  }, [form]);

  const onSubmit = async (values: GlobalSettingFormValues) => {
    try {
      setLoading(true);
      await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl">
      <CardHeader>
        <CardTitle>Global Website Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <Section title="Footer & Attribution">
              <TwoCols>
                <InputField
                  form={form}
                  name="openingHours"
                  label="Opening Hours"
                />
                <InputField
                  form={form}
                  name="footerCopyrightText"
                  label="Footer Copyright"
                />
                <InputField
                  form={form}
                  name="attributionLabel"
                  label="Attribution Label"
                />
                <InputField
                  form={form}
                  name="attributionUrl"
                  label="Attribution URL"
                />
              </TwoCols>
            </Section>

            <Button disabled={loading}>
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
      <h3 className="font-semibold text-lg">{title}</h3>
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
