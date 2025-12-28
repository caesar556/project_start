"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  moveRequestSchema,
  MoveRequestFormValues,
} from "@/lib/form-validtion/move-requset";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

export default function FormRequest() {
  const form = useForm<MoveRequestFormValues>({
    resolver: zodResolver(moveRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      fromCity: "",
      fromAddress: "",
      fromFloor: "",
      fromElevator: false,
      toCity: "",
      toAddress: "",
      toFloor: "",
      toElevator: false,
      packing: false,
      assembly: false,
      cleaning: false,
      decluttering: false,
      noParking: false,
      message: "",
    },
  });

  const onSubmit = async (data: MoveRequestFormValues) => {
    try {
      const res = await fetch("/api/move-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      console.log("Saved:", result.data);

      form.reset();
      alert("Anfrage erfolgreich gesendet");
    } catch (error) {
      console.error(error);
      alert("Fehler beim Senden der Anfrage");
    }
  };

  const baseInput =
    "rounded-md bg-orange-800/10 shadow-lg border-none focus-visible:bg-orange-800/20";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="space-y-4">
          <h3 className="font-semibold">Persönliche Daten</h3>

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
        </section>

        <section className="space-y-4">
          <h3 className="font-semibold">Auszugsadresse</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fromCity"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className={fieldState.error ? "text-red-600" : ""}>
                    Stadt / Ort *
                  </FormLabel>
                  <FormControl>
                    <Input className={baseInput} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-700 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fromAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse (optional)</FormLabel>
                  <FormControl>
                    <Input className={baseInput} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fromFloor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stockwerk</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className={baseInput}>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-foreground shadow-xl border">
                      {[...Array(11)].map((_, i) => (
                        <SelectItem key={i} value={String(i)}>
                          {i === 0 ? "Erdgeschoss" : `${i}. Stock`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fromElevator"
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
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-semibold">Einzugsadresse</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="toCity"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className={fieldState.error ? "text-red-600" : ""}>
                    Stadt / Ort *
                  </FormLabel>
                  <FormControl>
                    <Input className={baseInput} {...field} />
                  </FormControl>
                  <FormMessage className="text-red-700 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="toAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse (optional)</FormLabel>
                  <FormControl>
                    <Input className={baseInput} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="toFloor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stockwerk</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className={baseInput}>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-foreground shadow-xl border">
                      {[...Array(11)].map((_, i) => (
                        <SelectItem key={i} value={String(i)}>
                          {i === 0 ? "Erdgeschoss" : `${i}. Stock`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="toElevator"
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
          </div>
        </section>
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Umzugsdetails</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Rooms */}
            <FormField
              control={form.control}
              name="rooms"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className={fieldState.error ? "text-red-600" : ""}>
                    Anzahl Zimmer *
                  </FormLabel>

                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className={baseInput}>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent className="bg-white text-foreground shadow-xl border">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} Zimmer
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage className="text-red-700 text-sm" />
                </FormItem>
              )}
            />

            {/* Area */}
            <FormField
              control={form.control}
              name="area"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className={fieldState.error ? "text-red-600" : ""}>
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

            {/* Move Date */}
            <FormField
              control={form.control}
              name="moveDate"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className={fieldState.error ? "text-red-600" : ""}>
                    Umzugsdatum *
                  </FormLabel>

                  <FormControl>
                    <Input type="date" className={baseInput} {...field} />
                  </FormControl>

                  <FormMessage className="text-red-700 text-sm" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Zusatzleistungen</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Packing */}
            <FormField
              control={form.control}
              name="packing"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0 rounded-md bg-orange-800/10 p-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(!!v)}
                    />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">
                    Verpackungsservice (+200€)
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Assembly */}
            <FormField
              control={form.control}
              name="assembly"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0 rounded-md bg-orange-800/10 p-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(!!v)}
                    />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">
                    Möbelmontage (+150€)
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Cleaning */}
            <FormField
              control={form.control}
              name="cleaning"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0 rounded-md bg-orange-800/10 p-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(!!v)}
                    />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">
                    Endreinigung (+100€)
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Decluttering */}
            <FormField
              control={form.control}
              name="decluttering"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0 rounded-md bg-orange-800/10 p-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(!!v)}
                    />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">
                    Entrümpelung (+300€)
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* No Parking */}
            <FormField
              control={form.control}
              name="noParking"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0 rounded-md bg-orange-800/10 p-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(!!v)}
                    />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">
                    Halteverbotszone (+100€)
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* ================= Message ================= */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="your message"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full text-white"
          style={{
            background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
          }}
        >
          Anfrage absenden
        </Button>
      </form>
    </Form>
  );
}
