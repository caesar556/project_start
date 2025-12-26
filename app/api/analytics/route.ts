import dbConnect from "@/lib/db";
import MoveRequest from "@/models/MoveRequest";
import ClearanceRequest from "@/models/ClearanceRequest";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const [moveAnalytics, clearanceAnalytics, ratings] = await Promise.all([
    MoveRequest.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],

          byStatus: [{ $group: { _id: "$status", count: { $sum: 1 } } }],

          perDay: [
            {
              $group: {
                _id: {
                  $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$createdAt",
                  },
                },
                count: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
          ],

          topCities: [
            { $match: { fromCity: { $ne: null } } },
            {
              $group: {
                _id: "$fromCity",
                count: { $sum: 1 },
              },
            },
            { $sort: { count: -1 } },
            { $limit: 5 },
          ],
        },
      },
    ]),

    ClearanceRequest.aggregate([
      {
        $facet: {
          total: [{ $count: "count" }],

          byStatus: [{ $group: { _id: "$status", count: { $sum: 1 } } }],

          perDay: [
            {
              $group: {
                _id: {
                  $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$createdAt",
                  },
                },
                count: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
          ],
        },
      },
    ]),

    Testimonials.aggregate([
      { $match: { isPublished: true } },
      {
        $group: {
          _id: null,
          avgRating: { $avg: "$rating" },
          total: { $sum: 1 },
        },
      },
    ]),
  ]);

  const move = moveAnalytics[0];
  const clearance = clearanceAnalytics[0];

  return NextResponse.json({
    moveRequests: {
      total: move.total[0]?.count || 0,
      byStatus: move.byStatus,
      perDay: move.perDay,
      topCities: move.topCities,
    },

    clearanceRequests: {
      total: clearance.total[0]?.count || 0,
      byStatus: clearance.byStatus,
      perDay: clearance.perDay,
    },

    ratings: ratings[0] || {
      avgRating: 0,
      total: 0,
    },
  });
}
