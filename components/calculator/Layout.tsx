"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import HeadCalc from "./HeadCalc";
import RouteCalc from "./RouteCalc";
import { CalculatorConfig } from "@/types";
import SizeCalc from "./SizeCalc";
import Floors from "./Floors";
import { Building2, MapPin, Package, Sparkles, Truck } from "lucide-react";
import ExtraServices from "./ExtraSerivces";
import { useEstimate } from "@/hooks/useEstimate";
import Result from "./Result";

const CALCULATOR_CONFIG: CalculatorConfig = {
  labels: {
    startort: "Startort (frei eingeben)",
    zielort: "Zielort (frei eingeben)",
    wohnflaeche: "Wohnfläche",
    zimmeranzahl: "Anzahl Zimmer",
    auszugStock: "Auszug - Stockwerk",
    einzugStock: "Einzug - Stockwerk",
    aufzugVorhanden: "Aufzug vorhanden",
  },
  placeholders: {
    startort: "z. B. Wien, Salzburg …",
    zielort: "z. B. Graz, Linz, Deutschland …",
  },
  rabattText: "50 € RABATT",
  resultCard: {
    title: "Ihre Kostenübersicht",
    originalpreisLabel: "Originalpreis:",
    rabattpreisLabel: "Ihr Preis:",
    disclaimer:
      "Diese Schätzung dient nur zur Orientierung. Der tatsächliche Preis kann je nach individuellen Anforderungen abweichen. Für ein verbindliches Angebot kontaktieren Sie uns bitte.",
    ctaText: "Kostenloses Angebot anfordern",
    inklusiveText: "inkl. MwSt. & Versicherung",
  },
  emptyState: {
    title: "Zielort eingeben",
    description:
      "Bitte geben Sie einen Zielort ein, um die Kosten zu berechnen.",
  },
  tooltips: {
    fallbackInfo: "Schätzung basiert auf Wohnfläche und Zimmeranzahl",
  },
};

export default function CalculatorLayout() {
  const [fromCity, setFromCity] = useState("Wien");
  const [toCity, setToCity] = useState("");
  const [area, setArea] = useState(60);
  const [rooms, setRooms] = useState(2);
  const [fromFloor, setFromFloor] = useState(0);
  const [toFloor, setToFloor] = useState(0);
  const [fromElevator, setFromElevator] = useState(false);
  const [toElevator, setToElevator] = useState(false);
  const [packing, setPacking] = useState(false);
  const [assembly, setAssembly] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [decluttering, setDecluttering] = useState(false);
  const [noParking, setNoParking] = useState(false);
  const extraServices = [
    {
      id: "packing",
      label: "Verpackungsservice",
      price: "+200€",
      checked: packing,
      setChecked: setPacking,
      icon: Package,
    },
    {
      id: "assembly",
      label: "Möbelmontage",
      price: "+150€",
      checked: assembly,
      setChecked: setAssembly,
      icon: Building2,
    },
    {
      id: "cleaning",
      label: "Endreinigung",
      price: "+100€",
      checked: cleaning,
      setChecked: setCleaning,
      icon: Sparkles,
    },
    {
      id: "decluttering",
      label: "Entrümpelung",
      price: "+300€",
      checked: decluttering,
      setChecked: setDecluttering,
      icon: Truck,
    },
    {
      id: "noParking",
      label: "Halteverbotszone",
      price: "+100€",
      checked: noParking,
      setChecked: setNoParking,
      icon: MapPin,
    },
  ];
  const estimate = useEstimate({
    fromCity,
    toCity,
    area,
    rooms,
    fromFloor,
    toFloor,
    fromElevator,
    toElevator,
    packing,
    assembly,
    cleaning,
    decluttering,
    noParking,
  });

  return (
    <div className="max-w-4xl mx-auto">
      <Card
        className="border-0 shadow-2xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0D1628 0%, #121A2F 100%)",
        }}
      >
        <HeadCalc />
        <CardContent className="p-8 space-y-8">
          <RouteCalc
            CALCULATOR_CONFIG={CALCULATOR_CONFIG}
            fromCity={fromCity}
            setFromCity={setFromCity}
            toCity={toCity}
            setToCity={setToCity}
          />
          <SizeCalc
            CALCULATOR_CONFIG={CALCULATOR_CONFIG}
            area={area}
            setArea={setArea}
            rooms={rooms}
            setRooms={setRooms}
          />
          <Floors
            CALCULATOR_CONFIG={CALCULATOR_CONFIG}
            fromElevator={fromElevator}
            setFromElevator={setFromElevator}
            toElevator={toElevator}
            setToElevator={setToElevator}
            fromFloor={fromFloor}
            setFromFloor={setFromFloor}
            toFloor={toFloor}
            setToFloor={setToFloor}
          />
          <ExtraServices extraServices={extraServices} />
          <Result
            estimate={estimate}
            CALCULATOR_CONFIG={CALCULATOR_CONFIG}
            fromCity={fromCity}
            toCity={toCity}
            area={area}
            rooms={rooms}
            fromFloor={fromFloor}
            toFloor={toFloor}
            fromElevator={fromElevator}
            toElevator={toElevator}
            packing={packing}
            assembly={assembly}
            cleaning={cleaning}
            decluttering={decluttering}
            noParking={noParking}
          />
        </CardContent>
      </Card>
    </div>
  );
}
