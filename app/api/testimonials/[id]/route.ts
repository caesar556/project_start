import dbConnect from "@/lib/db";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";
import { testimonialSchema } from "@/lib/validation/schemas";

export async function PATCH(req: Request, { params }: any) {
  await dbConnect();
  const { id } = await params;
  try {
    const body = await req.json();
    const validatedData = testimonialSchema.partial().parse(body);
    const updated = await Testimonials.findByIdAndUpdate(id, validatedData, {
      new: true,
    });
    if (!updated) return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
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
  await Testimonials.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
