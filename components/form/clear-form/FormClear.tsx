"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CITIES } from "@/constants";
import { Loader2, CheckCircle } from "lucide-react";

import {
  ClearanceRequestFormValues,
  clearanceRequestSchema,
} from "@/lib/form-validation/clear-request";

export default function ClearanceRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ClearanceRequestFormValues>({
    resolver: zodResolver(clearanceRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      floor: "0",
      elevator: false,
      propertyType: "wohnung",
      rooms: "2",
      area: "",
      preferredDate: "",
      fullClearance: true,
      partialClearance: false,
      disposal: true,
      cleaning: false,
      message: "",
    },
  });

  const onSubmit = async (data: ClearanceRequestFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/clear-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      console.log("Saved:", result);
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Fehler beim Senden der Anfrage");
    } finally {
      setIsSubmitting(false);
    }
  };
  const baseInput =
    "rounded-md bg-orange-800/10 shadow-lg border-none focus-visible:bg-orange-800/20";

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Vielen Dank!</h2>
          <p className="text-muted-foreground mb-6">
            Ihre Entrümpelungsanfrage wurde erfolgreich übermittelt. Wir melden
            uns schnellstmöglich bei Ihnen.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Neue Anfrage stellen
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto bg-orange-400/10 shadow-lg border-none ">
      <CardHeader>
        <CardTitle>Entrümpelung anfragen</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus für eine professionelle Entrümpelung oder
          Haushaltsauflösung.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "firstName", label: "Vorname *", placeholder: "Max" },
                {
                  name: "lastName",
                  label: "Nachname *",
                  placeholder: "Mustermann",
                },
                {
                  name: "email",
                  label: "E-Mail *",
                  placeholder: "max@beispiel.at",
                  type: "email",
                },
                {
                  name: "phone",
                  label: "Telefon *",
                  placeholder: "+43 660 123 4567",
                },
              ].map((field: any) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: f, fieldState }) => (
                    <FormItem>
                      <FormLabel
                        className={fieldState.error ? "text-red-600" : ""}
                      >
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...f}
                          type={field.type ?? "text"}
                          placeholder={field.placeholder}
                          className={baseInput}
                        />
                      </FormControl>
                      <FormMessage className="text-red-700 text-sm" />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="font-semibold">Objektdaten</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stadt *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Stadt wählen" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CITIES.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse *</FormLabel>
                      <FormControl>
                        <Input placeholder="Straße und Hausnummer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objektart</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem value="wohnung">Wohnung</SelectItem>
                          <SelectItem value="haus">Haus</SelectItem>
                          <SelectItem value="keller">Keller</SelectItem>
                          <SelectItem value="dachboden">Dachboden</SelectItem>
                          <SelectItem value="garage">Garage</SelectItem>
                          <SelectItem value="buero">Büro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="floor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stockwerk</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[...Array(11)].map((_, i) => (
                            <SelectItem key={i} value={String(i)}>
                              {i === 0 ? "Erdgeschoss" : `${i}. Stock`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anzahl Zimmer</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <SelectItem key={n} value={String(n)}>
                              {n} Zimmer
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel
                        className={fieldState.error ? "text-red-600" : ""}
                      >
                        Wohnfläche (m²)
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="z.B. 75"
                          className={baseInput}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage className="text-red-700 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="elevator"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2 pt-6">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Aufzug vorhanden
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wunschdatum *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold">Gewünschte Leistungen</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "fullClearance", label: "Komplettentrümpelung" },
                  { name: "partialClearance", label: "Teilentrümpelung" },
                  { name: "disposal", label: "Fachgerechte Entsorgung" },
                  { name: "cleaning", label: "Besenreine Übergabe" },
                ].map((item) => (
                  <FormField
                    key={item.name}
                    control={form.control}
                    name={item.name as keyof ClearanceRequestFormValues}
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value as boolean}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beschreibung (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Beschreiben Sie kurz, was entrümpelt werden soll..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-orange-400 text-white"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                "Unverbindliches Angebot anfordern"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
