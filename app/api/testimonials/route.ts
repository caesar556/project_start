import dbConnect from "@/lib/db";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";
import { testimonialSchema } from "@/lib/validation/schemas";

export async function GET() {
  await dbConnect();
  const items = await Testimonials.find();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validatedData = testimonialSchema.parse(body);
    const item = await Testimonials.create(validatedData);
    return NextResponse.json(item, { status: 201 });
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
