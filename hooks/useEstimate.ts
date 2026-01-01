"use client";

import { useMemo, useEffect, useState } from "react";

export interface CityData {
  _id: string;
  name: string;
  slug: string;
  distance: number;
  priceMin?: number;
  priceMax?: number;
}

export const normalizeCity = (input: string) => input.toLowerCase().trim();

export const findCityMatch = (input: string, cities: CityData[]) => {
  const normalized = normalizeCity(input);
  for (const city of cities) {
    if (normalized.includes(normalizeCity(city.name))) {
      return {
        min: city.priceMin ?? 200,
        max: city.priceMax ?? 600,
        distance: city.distance
      };
    }
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
  const [cities, setCities] = useState<CityData[]>([]);

  useEffect(() => {
    fetch("/api/cities")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCities(data);
        }
      })
      .catch((err) => console.error("Error fetching cities for estimate:", err));
  }, []);

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
    const cityMatch = isFromWien ? findCityMatch(toCity, cities) : null;

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
    cities,
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
