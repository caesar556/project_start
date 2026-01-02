import dbConnect from "@/lib/db";
import City from "@/models/City";
import { NextResponse } from "next/server";
import { citySchema } from "@/lib/validation/schemas";

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
  try {
    const body = await req.json();
    const validatedData = citySchema.partial().parse(body);
    const city = await City.findByIdAndUpdate(id, validatedData, { new: true });
    if (!city) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }
    return NextResponse.json(city);
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;

  await City.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
