import dbConnect from "@/lib/db";
import Service from "@/models/Service";
import { NextResponse } from "next/server";
import { serviceSchema } from "@/lib/validation/schemas";

export async function GET(_: Request, { params }: any) {
  await dbConnect();
  const service = await Service.findById(params.id);
  if (!service) return NextResponse.json({ error: "Service not found" }, { status: 404 });
  return NextResponse.json(service);
}

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  try {
    const data = await req.json();
    const validatedData = serviceSchema.partial().parse(data);
    const updated = await Service.findByIdAndUpdate(id, validatedData, {
      new: true,
    });
    if (!updated) return NextResponse.json({ error: "Service not found" }, { status: 404 });
    return NextResponse.json(updated);
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
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
