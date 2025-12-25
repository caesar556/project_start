import dbConnect from "@/lib/db";
import Faq from "@/models/Faq";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const faqs = await Faq.find();
  return NextResponse.json(faqs);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const faq = await Faq.create(body);
  return NextResponse.json(faq, { status: 201 });
}
