import dbConnect from "@/lib/db";
import City from "@/models/City";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const cities = await City.find();
    return NextResponse.json(cities);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const city = await City.create(body);
    return NextResponse.json(city, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
