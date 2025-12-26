"use client";

import "@/lib/chart";
import { Doughnut } from "react-chartjs-2";

type Props = {
  data: { _id: string; count: number }[];
};

export default function TopCities({ data }: Props) {
  const chartData = {
    labels: data.map((c) => c._id),
    datasets: [
      {
        data: data.map((c) => c.count),
        backgroundColor: [
          "#2563eb",
          "#16a34a",
          "#f59e0b",
          "#dc2626",
          "#7c3aed",
        ],
      },
    ],
  };

  return (
    <div className="rounded-xl border p-4">
      <h2 className="font-semibold mb-4">Top Cities</h2>
      <div className="max-w-sm">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
}
