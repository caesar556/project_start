import dbConnect from "@/lib/db";
import Request from "@/models/Request";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const body = await req.json();
  const updated = await Request.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  await Request.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
