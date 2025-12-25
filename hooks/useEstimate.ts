import { useMemo } from "react";

export const AUSTRIAN_PRICE_TABLE: Record<
  string,
  { min: number; max: number; distance: number }
> = {
  wien: { min: 200, max: 600, distance: 0 },
  salzburg: { min: 600, max: 2300, distance: 295 },
  graz: { min: 500, max: 1800, distance: 200 },
  linz: { min: 500, max: 1800, distance: 185 },
  innsbruck: { min: 1000, max: 3300, distance: 480 },
  tirol: { min: 800, max: 2800, distance: 380 },
  kufstein: { min: 800, max: 2800, distance: 380 },
  klagenfurt: { min: 700, max: 2300, distance: 320 },
  villach: { min: 800, max: 2500, distance: 360 },
  bregenz: { min: 1100, max: 3300, distance: 640 },
  eisenstadt: { min: 300, max: 800, distance: 60 },
  "st. pölten": { min: 300, max: 800, distance: 65 },
};

export const normalizeCity = (input: string) => input.toLowerCase().trim();

export const findCityMatch = (input: string) => {
  const normalized = normalizeCity(input);
  for (const [cityKey, data] of Object.entries(AUSTRIAN_PRICE_TABLE)) {
    if (normalized.includes(normalizeCity(cityKey))) return data;
  }
  return null;
};

export interface EstimateParams {
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
}

export const useEstimate = (params: EstimateParams) => {
  return useMemo(() => {
    const {
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
    } = params;

    if (!toCity.trim()) return null;

    const isFromWien = normalizeCity(fromCity).includes("wien");
    const cityMatch = isFromWien ? findCityMatch(toCity) : null;

    let baseMin: number,
      baseMax: number,
      distance: number | null,
      usedFallback = false;

    if (cityMatch) {
      baseMin = cityMatch.min;
      baseMax = cityMatch.max;
      distance = cityMatch.distance;
    } else {
      const volumeBase = area * 4.5 + rooms * 120;
      baseMin = Math.round(volumeBase * 0.8);
      baseMax = Math.round(volumeBase * 1.5);
      distance = null;
      usedFallback = true;
    }

    const sizeFactor = Math.max(area / 60, rooms / 2);
    const floorFactor =
      ((fromElevator ? 1 : 1 + fromFloor * 0.05) +
        (toElevator ? 1 : 1 + toFloor * 0.05)) /
      2;

    let extraCosts = 0;
    if (packing) extraCosts += 200;
    if (assembly) extraCosts += 150;
    if (cleaning) extraCosts += 100;
    if (decluttering) extraCosts += 300;
    if (noParking) extraCosts += 100;

    const minEstimate = Math.round(
      baseMin * sizeFactor * floorFactor + extraCosts,
    );
    const maxEstimate = Math.round(
      baseMax * sizeFactor * floorFactor + extraCosts,
    );
    const midpoint = Math.round((minEstimate + maxEstimate) / 2);
    const fakeOriginalPrice = midpoint * 2;

    return {
      min: minEstimate,
      max: maxEstimate,
      midpoint,
      fakeOriginalPrice,
      distance,
      usedFallback,
    };
  }, [
    params.fromCity,
    params.toCity,
    params.area,
    params.rooms,
    params.fromFloor,
    params.toFloor,
    params.fromElevator,
    params.toElevator,
    params.packing,
    params.assembly,
    params.cleaning,
    params.decluttering,
    params.noParking,
  ]);
};
