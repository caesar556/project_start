import { Card } from "@/components/ui/card";
import {
  Clock,
  RefreshCw,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { JSX } from "react";

type Status = "new" | "processing" | "completed" | "cancelled";

type Props = {
  newCount: number;
  processingCount: number;
  completedCount: number;
};

const STATUS_CONFIG: Record<
  Status,
  {
    label: string;
    icon: JSX.Element;
    iconWrapperClass: string;
  }
> = {
  new: {
    label: "Offen",
    icon: <Clock className="h-6 w-6" />,
    iconWrapperClass: "bg-blue-100 text-blue-600",
  },
  processing: {
    label: "In Bearbeitung",
    icon: <RefreshCw className="h-6 w-6" />,
    iconWrapperClass: "bg-yellow-100 text-yellow-600",
  },
  completed: {
    label: "Abgeschlossen",
    icon: <CheckCircle2 className="h-6 w-6" />,
    iconWrapperClass: "bg-green-100 text-green-600",
  },
  cancelled: {
    label: "Storniert",
    icon: <XCircle className="h-6 w-6" />,
    iconWrapperClass: "bg-red-100 text-red-600",
  },
};

/* ========= Component ========= */
export function DashboardStats({
  newCount,
  processingCount,
  completedCount,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard status="new" value={newCount} />
      <StatCard status="processing" value={processingCount} />
      <StatCard status="completed" value={completedCount} />
    </div>
  );
}

function StatCard({
  status,
  value,
}: {
  status: Status;
  value: number;
}) {
  const config = STATUS_CONFIG[status];

  return (
    <Card className="bg-white dark:bg-zinc-900 border-none shadow-sm p-4 flex items-center gap-4 transition-colors">
      <div
        className={`p-3 rounded-xl ${config.iconWrapperClass}`}
      >
        {config.icon}
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium">
          {config.label}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
          {value}
        </p>
      </div>
    </Card>
  );
}