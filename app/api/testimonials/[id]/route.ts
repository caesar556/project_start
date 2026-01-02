import dbConnect from "@/lib/db";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: any) {
  await dbConnect();
  const body = await req.json();
  const { id } = await params;
  const updated = await Testimonials.findByIdAndUpdate(id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  await Testimonials.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
