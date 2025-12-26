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

// Wrapper component for each field group
const FieldGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <h3 className="font-semibold text-foreground">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

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
      rooms: "",
      area: "",
      moveDate: "",
      packing: false,
      assembly: false,
      cleaning: false,
      decluttering: false,
      noParking: false,
      message: "",
    },
  });

  const onSubmit = (data: MoveRequestFormValues) => {
    console.log("FORM DATA:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Persönliche Daten */}
        <FieldGroup title="Persönliche Daten">
          {["firstName", "lastName", "email", "phone"].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof MoveRequestFormValues}
              render={({ field: f }) => (
                <FormItem>
                  <FormLabel>
                    {field === "firstName"
                      ? "Vorname *"
                      : field === "lastName"
                        ? "Nachname *"
                        : field === "email"
                          ? "E-Mail *"
                          : "Telefon *"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      placeholder={
                        field === "firstName"
                          ? "Max"
                          : field === "lastName"
                            ? "Mustermann"
                            : field === "email"
                              ? "max@beispiel.at"
                              : "+43 660 123 4567"
                      }
                      {...f}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </FieldGroup>

        {/* Auszugsadresse */}
        <FieldGroup title="Auszugsadresse">
          <FormField
            control={form.control}
            name="fromCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stadt / Ort *</FormLabel>
                <FormControl>
                  <Input placeholder="z. B. Wien, Salzburg" {...field} />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Straße und Hausnummer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fromFloor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stockwerk</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
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
            name="fromElevator"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0 pt-6">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal">Aufzug vorhanden</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </FieldGroup>

        {/* Einzugsadresse */}
        <FieldGroup title="Einzugsadresse">
          <FormField
            control={form.control}
            name="toCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stadt / Ort *</FormLabel>
                <FormControl>
                  <Input placeholder="z. B. Graz, Linz" {...field} />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Straße und Hausnummer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="toFloor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stockwerk</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
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
            name="toElevator"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0 pt-6">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal">Aufzug vorhanden</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </FieldGroup>

        {/* Umzugsdetails */}
        <FieldGroup title="Umzugsdetails">
          <FormField
            control={form.control}
            name="rooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anzahl Zimmer</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wohnfläche (m²)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="z.B. 75" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="moveDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Umzugsdatum *</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FieldGroup>

        {/* Zusatzleistungen */}
        <FieldGroup title="Zusatzleistungen">
          {["packing", "assembly", "cleaning", "decluttering", "noParking"].map(
            (field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof MoveRequestFormValues}
                render={({ field: f }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={f.value}
                        onCheckedChange={f.onChange}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {field === "packing"
                        ? "Verpackungsservice (+200€)"
                        : field === "assembly"
                          ? "Möbelmontage (+150€)"
                          : field === "cleaning"
                            ? "Endreinigung (+100€)"
                            : field === "decluttering"
                              ? "Entrümpelung (+300€)"
                              : "Halteverbotszone (+100€)"}
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ),
          )}
        </FieldGroup>

        {/* Nachricht */}
        <FieldGroup title="Nachricht (optional)">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Weitere Informationen zu Ihrem Umzug (z.B. besondere Gegenstände, Zeitwünsche, etc.)"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FieldGroup>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          style={{
            background: "linear-gradient(135deg, #FF6A00 0%, #FF8534 100%)",
          }}
        >
          Absenden
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir
          melden uns innerhalb von 24 Stunden.
        </p>
      </form>
    </Form>
  );
}
