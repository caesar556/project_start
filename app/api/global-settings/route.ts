import dbConnect from "@/lib/db";
import GlobalSetting from "@/models/GlobalSetting";
import { NextResponse } from "next/server";
import { globalSettingSchema } from "@/lib/validation/global-setting";

export async function GET() {
  await dbConnect();
  const setting = await GlobalSetting.findOne();
  return NextResponse.json(setting);
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validatedData = globalSettingSchema.parse(body);

    const exists = await GlobalSetting.findOne();
    if (exists) return NextResponse.json(exists);

    const setting = await GlobalSetting.create(validatedData);
    return NextResponse.json(setting, { status: 201 });
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validatedData = globalSettingSchema.partial().parse(body);

    const updated = await GlobalSetting.findOneAndUpdate({}, validatedData, {
      new: true,
      upsert: true,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    if (err.name === "ZodError") {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
