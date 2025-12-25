import dbConnect from "@/lib/db";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const body = await req.json();
  const item = await Testimonials.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(item);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  await Testimonials.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
