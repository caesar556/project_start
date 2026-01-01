"use client";

import { useDashboardData } from "@/hooks/useDashborad";
import { DashboardStats } from "./DashboardStats";
import { RequestsTabs } from "./RequestsTab";

export default function DashboardPage() {
  const { moveRequests, clearanceRequests, stats, loading, error, refresh } =
    useDashboardData();

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="h-12 w-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
        <p className="text-gray-400 font-medium">Lade Anfragen...</p>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="space-y-8">
      <DashboardStats
        newCount={stats.new}
        processingCount={stats.processing}
        completedCount={stats.completed}
      />

      <RequestsTabs
        moveRequests={moveRequests}
        clearanceRequests={clearanceRequests}
        onRefresh={refresh}
      />
    </div>
  );
}
