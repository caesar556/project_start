import dbConnect from "@/lib/db";
import ClearanceRequest from "@/models/ClearanceRequest";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const requests = await ClearanceRequest.find();
  return NextResponse.json(requests);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const request = await ClearanceRequest.create(body);
  return NextResponse.json(request, { status: 201 });
}
