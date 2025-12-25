import dbConnect from "@/lib/db";
import Request from "@/models/Request";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const [totalRequests, requestsByStatus, requestsPerDay, topCities, ratings] =
    await Promise.all([
      Request.countDocuments(),

      Request.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),

      Request.aggregate([
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
      ]),

      Request.aggregate([
        { $match: { fromCity: { $ne: null } } },
        {
          $group: { _id: "$fromCity", count: { $sum: 1 } },
        },
        { $sort: { count: -1 } },
        { $limit: 5 },
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

  return NextResponse.json({
    totalRequests,
    requestsByStatus,
    requestsPerDay,
    topCities,
    ratings: ratings[0] || { avgRating: 0, total: 0 },
  });
}
