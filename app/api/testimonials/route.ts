import dbConnect from "@/lib/db";
import Testimonials from "@/models/Testimonials";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const items = await Testimonials.find();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const item = await Testimonials.create(body);
  return NextResponse.json(item, { status: 201 });
}
