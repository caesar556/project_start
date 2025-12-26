"use client";

import { useEffect, useState } from "react";
import RequestsByStatus from "./RequestsByStatus";
import RequestsPerDay from "./RequestsPerDay";
import TopCities from "./TopCities";
import StatCard from "./StatsCard";
import RatingsCard from "./Ratings";
import Loading from "@/app/loading";

type RequestsAnalytics = {
  total: number;
  byStatus: { _id: string; count: number }[];
  perDay: { _id: string; count: number }[];
  topCities?: { _id: string; count: number }[];
};

type AnalyticsData = {
  moveRequests: RequestsAnalytics;
  clearanceRequests: RequestsAnalytics;
  ratings: {
    avgRating: number;
    total: number;
  };
};

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (!data) return <p>No data</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Move Requests" value={data.moveRequests.total} />

        <StatCard
          title="Clearance Requests"
          value={data.clearanceRequests.total}
        />

        <RatingsCard ratings={data.ratings} />
      </div>
      <h2 className="text-lg font-bold text-center">Move Requests </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RequestsByStatus data={data.moveRequests.byStatus} />

        <RequestsPerDay data={data.moveRequests.perDay} />
      </div>

      <TopCities data={data.moveRequests.topCities || []} />

      <h2 className="text-lg font-bold mb-3 text-center">
        Clearance Requests{" "}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RequestsByStatus data={data.clearanceRequests.byStatus} />

        <RequestsPerDay data={data.clearanceRequests.perDay} />
      </div>
    </div>
  );
}
