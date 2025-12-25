import dbConnect from "@/lib/db";
import Faq from "@/models/Faq";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const body = await req.json();
  const faq = await Faq.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(faq);
}

export async function DELETE(_: Request, { params }: any) {
  await dbConnect();
  await Faq.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}