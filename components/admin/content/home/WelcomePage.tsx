"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
}

export default function DashboardPage() {
  const [moveRequests, setMoveRequests] = useState<MoveRequest[]>([]);
  const [clearanceRequests, setClearanceRequests] = useState<
    ClearanceRequest[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
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
      }
    };

    fetchRequests();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "blue";
      case "processing":
        return "yellow";
      case "completed":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  const renderMoveCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {moveRequests.map((req) => (
        <Card
          key={req._id}
          className="border border-gray-200 shadow-md hover:shadow-2xl transition-shadow rounded-xl overflow-hidden"
        >
          <CardHeader className="flex justify-between items-center bg-gray-50 px-4 py-3">
            <CardTitle className="text-lg font-semibold text-gray-800">
              {req.firstName} {req.lastName}
            </CardTitle>
            <Badge
              variant="outline"
              className={`border-${getStatusColor(req.status)} text-${getStatusColor(req.status)} px-3 py-1 rounded-full`}
            >
              {req.status.toUpperCase()}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-2 px-4 py-3">
            <p className="text-gray-600 text-sm">
              <strong>Email:</strong> {req.email}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Phone:</strong> {req.phone}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>From:</strong> {req.fromCity}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>To:</strong> {req.toCity}
            </p>
            {req.moveDate && (
              <p className="text-gray-600 text-sm">
                <strong>Move Date:</strong> {req.moveDate}
              </p>
            )}
            <Button
              variant="default"
              className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg"
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderClearanceCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clearanceRequests.map((req) => (
        <Card
          key={req._id}
          className="border border-gray-200 shadow-md hover:shadow-2xl transition-shadow rounded-xl overflow-hidden"
        >
          <CardHeader className="flex justify-between items-center bg-gray-50 px-4 py-3">
            <CardTitle className="text-lg font-semibold text-gray-800">
              {req.firstName} {req.lastName}
            </CardTitle>
            <Badge
              variant="outline"
              className={`border-${getStatusColor(req.status)} text-${getStatusColor(req.status)} px-3 py-1 rounded-full`}
            >
              {req.status.toUpperCase()}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-2 px-4 py-3">
            <p className="text-gray-600 text-sm">
              <strong>Email:</strong> {req.email}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Phone:</strong> {req.phone}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>City:</strong> {req.city}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Property Type:</strong> {req.propertyType}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Preferred Date:</strong> {req.preferredDate}
            </p>
            <Button
              variant="default"
              className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg"
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Welcome Admin</h1>
        <p className="text-gray-600 text-lg">Here are the latest requests:</p>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading requests...</p>
      ) : (
        <Tabs
          defaultValue="move"
          className="space-y-6 bg-white p-4 rounded-xl shadow-sm"
        >
          <TabsList className="bg-gray-100 rounded-lg p-1">
            <TabsTrigger value="move" className="rounded-lg hover:bg-gray-200">
              Move Requests ({moveRequests.length})
            </TabsTrigger>
            <TabsTrigger
              value="clearance"
              className="rounded-lg hover:bg-gray-200"
            >
              Clearance Requests ({clearanceRequests.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="move">
            {moveRequests.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                No move requests found.
              </p>
            ) : (
              renderMoveCards()
            )}
          </TabsContent>

          <TabsContent value="clearance">
            {clearanceRequests.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                No clearance requests found.
              </p>
            ) : (
              renderClearanceCards()
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
