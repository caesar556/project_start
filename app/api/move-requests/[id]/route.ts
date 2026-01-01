import dbConnect from "@/lib/db";
import MoveRequest from "@/models/MoveRequest";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const body = await req.json();
  const updated = await MoveRequest.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function PATCH(req: Request, { params }: any) {
  await dbConnect();
  const body = await req.json();
  const updated = await MoveRequest.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  await MoveRequest.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
