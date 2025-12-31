import { NextResponse } from "next/server";
import { ADMIN_CREDENTIALS } from "@/lib/admin-auth";


export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
