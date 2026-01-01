"use client";

import { useCallback, useEffect, useState } from "react";
import type { MoveRequest, ClearanceRequest } from "@/types";

export function useDashboardData() {
  const [moveRequests, setMoveRequests] = useState<MoveRequest[]>([]);
  const [clearanceRequests, setClearanceRequests] = useState<ClearanceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = useCallback(async () => {
    setRefreshing(true);
    setError(null);

    try {
      const [moveRes, clearanceRes] = await Promise.all([
        fetch("/api/move-requests"),
        fetch("/api/clear-requests"),
      ]);

      if (!moveRes.ok || !clearanceRes.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const moveData: MoveRequest[] = await moveRes.json();
      const clearanceData: ClearanceRequest[] = await clearanceRes.json();

      setMoveRequests(moveData);
      setClearanceRequests(clearanceData);
    } catch (err) {
      setError("Failed to load dashboard data ");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const stats = {
    new:
      moveRequests.filter(r => r.status === "new").length +
      clearanceRequests.filter(r => r.status === "new").length,
    processing:
      moveRequests.filter(r => r.status === "processing").length +
      clearanceRequests.filter(r => r.status === "processing").length,
    completed:
      moveRequests.filter(r => r.status === "completed").length +
      clearanceRequests.filter(r => r.status === "completed").length,
  };

  return {
    moveRequests,
    clearanceRequests,
    loading,
    refreshing,
    error,
    stats,
    refresh: fetchRequests,
  };
}