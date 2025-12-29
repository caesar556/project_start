import dbConnect from "@/lib/db";
import ClearanceRequest from "@/models/ClearanceRequest";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const requests = await ClearanceRequest.find();
  return NextResponse.json(requests);
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const request = await ClearanceRequest.create(body);
    return NextResponse.json({ success: true, data: request }, { status: 201 });
  } catch (error: any) {
    console.error("Clearance request error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
