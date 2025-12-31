import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  console.log("user", username, "password", password);
  console.log("env", process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
