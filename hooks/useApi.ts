"use client";

import { useState, useEffect, useCallback } from "react";

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number>;
}

export function useApi<T = any>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (options?: FetchOptions) => {
    setLoading(true);
    setError(null);
    try {
      let url = endpoint;
      if (options?.params) {
        const searchParams = new URLSearchParams();
        Object.entries(options.params).forEach(([key, value]) => {
          searchParams.append(key, String(value));
        });
        url += `?${searchParams.toString()}`;
      }

      const res = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      if (!res.ok) {
        throw new Error(`API Error: ${res.statusText}`);
      }

      const result = await res.json();
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const post = async (body: any) => {
    return fetchData({
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  const put = async (id: string, body: any) => {
    return fetchData({
      method: "PUT",
      body: JSON.stringify(body),
    });
  };

  const del = async (id: string) => {
    const res = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Delete failed");
    fetchData();
  };

  return { data, loading, error, refresh: fetchData, post, put, del };
}
