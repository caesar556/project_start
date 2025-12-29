"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, ArrowUpRight, Clock, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoveRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  fromCity: string;
  toCity: string;
  moveDate?: string;
  status: "new" | "processing" | "completed" | "cancelled";
  createdAt: string;
}

interface ClearanceRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  propertyType: string;
  preferredDate: string;
  status: "new" | "processing" | "completed" | "cancelled";
  createdAt: string;
}

export default function DashboardPage() {
  const [moveRequests, setMoveRequests] = useState<MoveRequest[]>([]);
  const [clearanceRequests, setClearanceRequests] = useState<
    ClearanceRequest[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRequests = async () => {
    setRefreshing(true);
    try {
      const [moveRes, clearanceRes] = await Promise.all([
        fetch("/api/move-requests"),
        fetch("/api/clear-requests"),
      ]);

      const moveData: MoveRequest[] = await moveRes.json();
      const clearanceData: ClearanceRequest[] = await clearanceRes.json();

      setMoveRequests(moveData);
      setClearanceRequests(clearanceData);
    } catch (error) {
      console.error("Failed to fetch requests", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const getStatusColor = (status: string) => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new": return <Clock className="h-3 w-3 mr-1" />;
      case "processing": return <RefreshCw className="h-3 w-3 mr-1" />;
      case "completed": return <CheckCircle2 className="h-3 w-3 mr-1" />;
      case "cancelled": return <XCircle className="h-3 w-3 mr-1" />;
      default: return null;
    }
  };

  const RequestCard = ({ req, type }: { req: MoveRequest | ClearanceRequest; type: 'move' | 'clearance' }) => (
    <Card
      key={req._id}
      className="group border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-white"
    >
      <CardHeader className="flex flex-row justify-between items-start bg-gray-50/50 px-4 py-4">
        <div className="space-y-1">
          <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
            {req.firstName} {req.lastName}
          </CardTitle>
          <p className="text-xs text-gray-500 font-medium">
            ID: {req._id.slice(-6).toUpperCase()}
          </p>
        </div>
        <Badge
          variant="secondary"
          className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border", getStatusColor(req.status))}
        >
          {getStatusIcon(req.status)}
          {req.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4 px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Email</label>
            <p className="text-sm text-gray-700 font-medium truncate">{req.email}</p>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Telefon</label>
            <p className="text-sm text-gray-700 font-medium">{req.phone}</p>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-100">
          {type === 'move' ? (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{(req as MoveRequest).fromCity}</span>
              <ArrowUpRight className="h-4 w-4 text-orange-500" />
              <span className="font-semibold text-gray-900">{(req as MoveRequest).toCity}</span>
            </div>
          ) : (
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Stadt & Immobilie</label>
              <p className="text-sm text-gray-700 font-medium">{(req as ClearanceRequest).city} • {(req as ClearanceRequest).propertyType}</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-[10px] text-gray-400 font-medium italic">
            Am {new Date().toLocaleDateString('de-DE')}
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

  return (
    <div className="p-4 md:p-8 space-y-8 bg-gray-50/50 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Übersicht</h1>
          <p className="text-gray-500 font-medium">Verwalten Sie Ihre aktuellen Kundenanfragen</p>
        </div>
        <Button 
          variant="outline" 
          onClick={fetchRequests}
          disabled={refreshing}
          className="bg-white border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold shadow-sm"
        >
          <RefreshCw className={cn("h-4 w-4 mr-2", refreshing && "animate-spin")} />
          Aktualisieren
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white border-none shadow-sm p-4 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Offene Anfragen</p>
            <p className="text-2xl font-bold text-gray-900">{moveRequests.filter(r => r.status === 'new').length + clearanceRequests.filter(r => r.status === 'new').length}</p>
          </div>
        </Card>
        <Card className="bg-white border-none shadow-sm p-4 flex items-center gap-4">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <RefreshCw className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">In Bearbeitung</p>
            <p className="text-2xl font-bold text-gray-900">{moveRequests.filter(r => r.status === 'processing').length + clearanceRequests.filter(r => r.status === 'processing').length}</p>
          </div>
        </Card>
        <Card className="bg-white border-none shadow-sm p-4 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-xl">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Abgeschlossen</p>
            <p className="text-2xl font-bold text-gray-900">{moveRequests.filter(r => r.status === 'completed').length + clearanceRequests.filter(r => r.status === 'completed').length}</p>
          </div>
        </Card>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="h-12 w-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
          <p className="text-gray-400 font-medium">Lade Anfragen...</p>
        </div>
      ) : (
        <Tabs
          defaultValue="move"
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4">
            <TabsList className="bg-gray-100/50 p-1 border border-gray-200 h-11">
              <TabsTrigger 
                value="move" 
                className="px-6 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm font-bold transition-all"
              >
                Umzüge ({moveRequests.length})
              </TabsTrigger>
              <TabsTrigger 
                value="clearance" 
                className="px-6 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm font-bold transition-all"
              >
                Entrümpelungen ({clearanceRequests.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="move" className="mt-0 outline-none">
            {moveRequests.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium italic">Keine Umzugsanfragen gefunden.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moveRequests.map((req) => (
                  <RequestCard key={req._id} req={req} type="move" />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="clearance" className="mt-0 outline-none">
            {clearanceRequests.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium italic">Keine Entrümpelungsanfragen gefunden.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clearanceRequests.map((req) => (
                  <RequestCard key={req._id} req={req} type="clearance" />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
