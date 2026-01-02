import { Badge } from "@/components/ui/badge";
import { Clock, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RequestStatus } from "@/types";

export const getStatusColor = (status: RequestStatus) => {
  switch (status) {
    case "new":
      return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20";
    case "processing":
      return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20";
    case "completed":
      return "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20";
    case "cancelled":
      return "bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20";
  }
};

export const getStatusIcon = (status: RequestStatus) => {
  switch (status) {
    case "new":
      return <Clock className="h-3 w-3 mr-1" />;
    case "processing":
      return <RefreshCw className="h-3 w-3 mr-1" />;
    case "completed":
      return <CheckCircle2 className="h-3 w-3 mr-1" />;
    case "cancelled":
      return <XCircle className="h-3 w-3 mr-1" />;
    default:
      return null;
  }
};

interface StatusBadgeProps {
  status: RequestStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
        getStatusColor(status),
        className
      )}
    >
      {getStatusIcon(status)}
      {status}
    </Badge>
  );
}
