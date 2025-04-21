import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  if (!req.cookies.get("refreshToken") && req.nextUrl.pathname === "/") {
    // console.log("path === /");
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (req.cookies.get("refreshToken") && req.nextUrl.pathname === "/auth") {
    // console.log("move to /");
    return NextResponse.redirect(new URL("/", req.url));
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  // matcher: ["/|/auth/:path*"],
};
