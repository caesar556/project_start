"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heart, Star, Plane } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const quickRequestSchema = z.object({
  fromAddress: z.string().max(300).optional(),
  toAddress: z.string().max(300).optional(),

  name: z.string().min(2, "Name ist erforderlich"),

  phone: z
    .string()
    .min(6, "Telefonnummer ist erforderlich")
    .regex(/^[0-9+ ]+$/, "Ungültige Telefonnummer"),

  email: z.string().email("Ungültige E-Mail-Adresse"),

  moveDate: z.string().optional(),

  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
});

type QuickRequestFormValues = z.infer<typeof quickRequestSchema>;

export default function ContactForm() {
  const [selectedSymbol, setSelectedSymbol] = useState<
    "heart" | "star" | "plane" | null
  >(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuickRequestFormValues>({
    resolver: zodResolver(quickRequestSchema),
    defaultValues: {
      fromAddress: "",
      toAddress: "",
      name: "",
      phone: "",
      email: "",
      moveDate: "",
      privacyAccepted: false,
    },
  });

  const onSubmit = async (data: QuickRequestFormValues) => {
    if (selectedSymbol !== "heart") {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setIsSubmitting(true);

    try {
      console.log("FORM DATA:", data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const baseInput =
    "rounded-md bg-orange-800/10 shadow-lg border-none focus-visible:bg-orange-800/20";

  return (
    <div className="bg-orange-700/10 rounded-2xl shadow-xl p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6 text-center">
        Schnellanfrage – Richard Umzug
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fromAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Auszug – Straße Nr, PLZ Ort</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="z.B. Musterstraße 1, 1010 Wien"
                    className={baseInput}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="toAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Einzug – Straße Nr, PLZ Ort</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="z.B. Beispielweg 5, 1020 Wien"
                    className={baseInput}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              const hasError = !!form.formState.errors.name;
              return (
                <FormItem>
                  <FormLabel className={hasError ? "text-red-600" : ""}>
                    Anrede Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={cn(
                        baseInput,
                        hasError && "border-red-500 focus-visible:ring-red-500",
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 text-sm" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              const hasError = !!form.formState.errors.phone;
              return (
                <FormItem>
                  <FormLabel className={hasError ? "text-red-600" : ""}>
                    Telefon *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      className={cn(
                        baseInput,
                        hasError && "border-red-500 focus-visible:ring-red-500",
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 text-sm" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const hasError = !!form.formState.errors.email;
              return (
                <FormItem>
                  <FormLabel className={hasError ? "text-red-600" : ""}>
                    E-Mail *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className={cn(
                        baseInput,
                        hasError && "border-red-500 focus-visible:ring-red-500",
                      )}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 text-sm" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="moveDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wunschdatum</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className={baseInput} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-center mb-3">
              Bitte wählen Sie das <strong>Herz</strong>-Symbol
            </p>

            <div className="flex justify-center gap-4">
              {(["heart", "star", "plane"] as const).map((symbol) => {
                const Icon =
                  symbol === "heart" ? Heart : symbol === "star" ? Star : Plane;

                return (
                  <button
                    key={symbol}
                    type="button"
                    onClick={() => {
                      setSelectedSymbol(symbol);
                      setCaptchaError(false);
                    }}
                    className={cn(
                      "p-3 rounded-xl border-2",
                      selectedSymbol === symbol
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-border",
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-8 h-8",
                        selectedSymbol === symbol
                          ? "text-orange-500 fill-orange-500"
                          : "text-muted-foreground",
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {captchaError && (
              <p className="text-sm text-red-600 mt-2 text-center">
                Bitte wählen Sie das Herz-Symbol
              </p>
            )}
          </div>

          <FormField
            control={form.control}
            name="privacyAccepted"
            render={({ field }) => {
              const hasError = !!form.formState.errors.privacyAccepted;
              return (
                <FormItem>
                  <div className="flex gap-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <Label
                      className={cn(
                        "text-sm",
                        hasError ? "text-red-600" : "text-muted-foreground",
                      )}
                    >
                      Ich akzeptiere die{" "}
                      <Link
                        href="/datenschutz"
                        className="text-orange-500 underline"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      *
                    </Label>
                  </div>
                  <FormMessage className="text-red-600 text-sm" />
                </FormItem>
              );
            }}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-lg font-semibold rounded-xl text-white"
            style={{
              background: "linear-gradient(135deg,#FF6A00 0%,#FF8534 100%)",
            }}
          >
            {isSubmitting ? "Wird gesendet..." : "Senden & 50 € sparen"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
