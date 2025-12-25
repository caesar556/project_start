import { NextResponse } from "next/server";

export const success = (data: any, status = 200) =>
  NextResponse.json(data, { status });

export const error = (message: string, status = 400) =>
  NextResponse.json({ error: message }, { status });
