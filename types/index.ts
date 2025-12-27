import { Icon, LucideIcon } from "lucide-react";

export type CalculatorConfig = {
  labels: {
    startort: string;
    zielort: string;
    wohnflaeche?: string;
    zimmeranzahl?: string;
    auszugStock?: string;
    einzugStock?: string;
    aufzugVorhanden?: string;
  };
  placeholders: {
    startort: string;
    zielort: string;
  };
  rabattText?: string;
  resultCard?: {
    title: string;
    originalpreisLabel: string;
    rabattpreisLabel: string;
    disclaimer: string;
    ctaText: string;
    inklusiveText?: string;
  };
  emptyState?: {
    title: string;
    description: string;
  };
  tooltips?: {
    fallbackInfo: string;
  };
};

export type RouteCalcProps = {
  CALCULATOR_CONFIG: CalculatorConfig;
  fromCity: string;
  setFromCity: (value: string) => void;
  toCity: string;
  setToCity: (value: string) => void;
};

export type SizeCalcProps = {
  CALCULATOR_CONFIG: CalculatorConfig;
  area: number;
  setArea: (value: number) => void;
  rooms: number;
  setRooms: (value: number) => void;
};

export type FloorsProps = {
  CALCULATOR_CONFIG: CalculatorConfig;
  fromFloor: number;
  setFromFloor: (value: number) => void;
  toFloor: number;
  setToFloor: (value: number) => void;
  fromElevator: boolean;
  setFromElevator: (value: boolean) => void;
  toElevator: boolean;
  setToElevator: (value: boolean) => void;
};

export type ExtraService = {
  id: string;
  label: string;
  price: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
  icon: LucideIcon;
};

export type ExtraServices = ExtraService[];

export interface ResultProps {
  estimate: ReturnType<typeof import("@/hooks/useEstimate").useEstimate> | null;
  fromCity: string;
  toCity: string;
  area: number;
  rooms: number;
  fromFloor: number;
  toFloor: number;
  fromElevator: boolean;
  toElevator: boolean;
  packing: boolean;
  assembly: boolean;
  cleaning: boolean;
  decluttering: boolean;
  noParking: boolean;
  CALCULATOR_CONFIG: CalculatorConfig;
}

export type City = {
  _id: string;
  name: string;
  slug: string;
  introText?: string;
  distance: number;
  priceMin: number;
  priceMax: number;
};

export type Service = {
  _id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonials = {
  _id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  date: Date;
  isFeatured: boolean;
};
