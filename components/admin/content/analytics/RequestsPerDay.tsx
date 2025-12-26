"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

type Props = {
  data: { _id: string; count: number }[];
};

export default function RequestsPerDay({ data }: Props) {
  const chartData = {
    labels: data.map((d) => d._id),
    datasets: [
      {
        label: "Requests",
        data: data.map((d) => d.count),
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="rounded-xl border p-4">
      <h2 className="font-semibold mb-4">Requests per Day</h2>
      <Line data={chartData} />
    </div>
  );
}
