import dbConnect from "@/lib/db";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  await Testimonials.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
