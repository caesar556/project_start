import dbConnect from "@/lib/db";
import Service from "@/models/Service";
import { NextResponse } from "next/server";
import { serviceSchema } from "@/lib/validation/schemas";

export async function GET() {
  await dbConnect();
  const services = await Service.find();
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validatedData = serviceSchema.parse(body);
    const service = await Service.create(validatedData);
    return NextResponse.json(service, { status: 201 });
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


