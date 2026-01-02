import dbConnect from "@/lib/db";
import City from "@/models/City";
import { NextResponse } from "next/server";
import { citySchema } from "@/lib/validation/schemas";

export async function GET() {
  await dbConnect();
  try {
    const cities = await City.find();
    return NextResponse.json(cities);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch cities" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validatedData = citySchema.parse(body);
    const city = await City.create(validatedData);
    return NextResponse.json(city, { status: 201 });
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
