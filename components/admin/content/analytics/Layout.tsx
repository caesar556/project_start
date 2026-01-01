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
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor your business performance and request trends.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Move Requests" value={data.moveRequests.total} />
        <StatCard title="Total Clearance Requests" value={data.clearanceRequests.total} />
        <RatingsCard ratings={data.ratings} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Move Requests Overview</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <RequestsByStatus data={data.moveRequests.byStatus} />
            <RequestsPerDay data={data.moveRequests.perDay} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Clearance Requests Overview</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <RequestsByStatus data={data.clearanceRequests.byStatus} />
            <RequestsPerDay data={data.clearanceRequests.perDay} />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-6">Geographic Distribution (Move Requests)</h2>
        <TopCities data={data.moveRequests.topCities || []} />
      </div>
    </div>
  );
}
