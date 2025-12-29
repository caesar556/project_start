import dbConnect from "@/lib/db";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: any) {
  await dbConnect();
  const service = await Service.findById(params.id);
  return NextResponse.json(service);
}

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  const data = await req.json();
  const updated = await Service.findByIdAndUpdate(id, data, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
