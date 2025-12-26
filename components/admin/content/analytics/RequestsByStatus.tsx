"use client";

import "@/lib/chart";
import { Bar } from "react-chartjs-2";

type Props = {
  data: { _id: string; count: number }[];
};

export default function RequestsByStatus({ data }: Props) {
  const chartData = {
    labels: data.map((d) => d._id || "Unknown"),
    datasets: [
      {
        label: "Requests",
        data: data.map((d) => d.count),
        backgroundColor: "#2563eb",
      },
    ],
  };

  return (
    <div className="rounded-xl border p-4 ">
      <h2 className="font-semibold mb-4">Requests by Status</h2>
      <Bar  data={chartData} />
    </div>
  );
}