import dbConnect from "@/lib/db";
import City from "@/models/City";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  const city = await City.findById(id);
  if (!city)
    return NextResponse.json({ error: "City not found" }, { status: 404 });
  return NextResponse.json(city);
}

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();
  const city = await City.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(city);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;

  await City.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
