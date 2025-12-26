import dbConnect from "@/lib/db";
import MoveRequest from "@/models/MoveRequest";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const requests = await MoveRequest.find();
  return NextResponse.json(requests);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const request = await MoveRequest.create(body);
  return NextResponse.json(request, { status: 201 });
}
