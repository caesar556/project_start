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

import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [selectedSymbol, setSelectedSymbol] = useState<
    "heart" | "star" | "plane" | null
  >(null);
  const [captchaError, setCaptchaError] = useState(false);

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

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: QuickRequestFormValues) => {
    if (selectedSymbol !== "heart") {
      setCaptchaError(true);
      toast.error("Bitte lösen Sie das Captcha");
      return;
    }

    setCaptchaError(false);

    try {
      console.log("FORM DATA:", data);
      // Simulating API call since it's missing in original code
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Anfrage erfolgreich gesendet");
      form.reset();
      setSelectedSymbol(null);
    } catch (error) {
      toast.error("Fehler beim Senden der Anfrage");
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
                <FormLabel className="font-medium">Auszug – Straße Nr, PLZ Ort</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="z.B. Musterstraße 1, 1010 Wien"
                    className={baseInput}
                    disabled={isSubmitting}
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
                <FormLabel className="font-medium">Einzug – Straße Nr, PLZ Ort</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="z.B. Beispielweg 5, 1020 Wien"
                    className={baseInput}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => {
              const hasError = !!fieldState.error;
              return (
                <FormItem>
                  <FormLabel className={hasError ? "text-red-600 font-medium" : "font-medium"}>
                    Anrede Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={cn(
                        baseInput,
                        hasError && "border-red-500 ring-red-500",
                      )}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 text-xs font-medium" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => {
              const hasError = !!fieldState.error;
              return (
                <FormItem>
                  <FormLabel className={hasError ? "text-red-600 font-medium" : "font-medium"}>
                    Telefon *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      className={cn(
                        baseInput,
                        hasError && "border-red-500 ring-red-500",
                      )}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 text-xs font-medium" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => {
              const hasError = !!fieldState.error;
              return (
                <FormItem>
                  <FormLabel className={hasError ? "text-red-600 font-medium" : "font-medium"}>
                    E-Mail *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className={cn(
                        baseInput,
                        hasError && "border-red-500 ring-red-500",
                      )}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 text-xs font-medium" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="moveDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Wunschdatum</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className={baseInput} disabled={isSubmitting} />
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
                    disabled={isSubmitting}
                    className={cn(
                      "p-3 rounded-xl border-2 transition-all",
                      selectedSymbol === symbol
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-border hover:border-orange-200",
                      isSubmitting && "opacity-50 cursor-not-allowed"
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
              <p className="text-xs text-red-600 mt-2 text-center font-medium">
                Bitte wählen Sie das Herz-Symbol
              </p>
            )}
          </div>

          <FormField
            control={form.control}
            name="privacyAccepted"
            render={({ field, fieldState }) => {
              const hasError = !!fieldState.error;
              return (
                <FormItem>
                  <div className="flex gap-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <Label
                      className={cn(
                        "text-sm cursor-pointer",
                        hasError ? "text-red-600 font-medium" : "text-muted-foreground",
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
                  <FormMessage className="text-red-600 text-xs font-medium" />
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
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              "Senden & 50 € sparen"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
