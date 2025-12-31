import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdmin = request.cookies.get("admin-auth")?.value === "true";
  const { pathname } = request.nextUrl;

  // The actual dashboard route is /(admin)/dashboard but Next.js exposes it as /dashboard
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isLoginPage = pathname === "/login";

  if (isDashboardRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoginPage && isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
