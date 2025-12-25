import dbConnect from "@/lib/db";
import Request from "@/models/Request";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const requests = await Request.find();
  return NextResponse.json(requests);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const request = await Request.create(body);
  return NextResponse.json(request, { status: 201 });
}
