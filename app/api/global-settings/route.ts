import dbConnect from "@/lib/db";
import GlobalSetting from "@/models/GlobalSetting";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const setting = await GlobalSetting.findOne();
  return NextResponse.json(setting);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const exists = await GlobalSetting.findOne();
  if (exists) return NextResponse.json(exists);

  const setting = await GlobalSetting.create(body);
  return NextResponse.json(setting, { status: 201 });
}

export async function PUT(req: Request) {
  await dbConnect();
  const body = await req.json();

  const updated = await GlobalSetting.findOneAndUpdate({}, body, {
    new: true,
    upsert: true,
  });

  return NextResponse.json(updated);
}
