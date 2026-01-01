import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  MoveRequest,
  ClearanceRequest,
  RequestStatus,
} from "@/types";

type Props = {
  data: MoveRequest | ClearanceRequest;
  type: "move" | "clearance";
};

const getStatusColor = (status: RequestStatus) => {
  switch (status) {
    case "new":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "processing":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "completed":
      return "bg-green-100 text-green-700 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getStatusIcon = (status: RequestStatus) => {
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

export function RequestCard({ data, type }: Props) {
  return (
    <Card className="group border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-white">
      <CardHeader className="flex flex-row justify-between items-start bg-gray-50/50 px-4 py-4">
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
            {data.firstName} {data.lastName}
          </CardTitle>
          <p className="text-xs text-gray-500 font-medium">
            ID: {data._id.slice(-6).toUpperCase()}
          </p>
        </div>

        <Badge
          variant="secondary"
          className={cn(
            "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
            getStatusColor(data.status)
          )}
        >
          {getStatusIcon(data.status)}
          {data.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4 px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">
              Email
            </label>
            <p className="text-sm text-gray-700 font-medium truncate">
              {data.email}
            </p>
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase">
              Telefon
            </label>
            <p className="text-sm text-gray-700 font-medium">{data.phone}</p>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100">
          {type === "move" ? (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                {(data as MoveRequest).fromCity}
              </span>
              <ArrowUpRight className="h-4 w-4 text-orange-500" />
              <span className="font-semibold text-gray-900">
                {(data as MoveRequest).toCity}
              </span>
            </div>
          ) : (
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase">
                Stadt & Immobilie
              </label>
              <p className="text-sm text-gray-700 font-medium">
                {(data as ClearanceRequest).city} •{" "}
                {(data as ClearanceRequest).propertyType}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-[10px] text-gray-400 font-medium italic">
            Am {new Date(data.createdAt).toLocaleDateString("de-DE")}
          </div>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-8 px-4 rounded-lg shadow-sm transition-transform active:scale-95"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}