import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  if (
    !req.cookies.get("refreshToken") ||
    req.nextUrl.pathname.startsWith("/protected")
  ) {
    console.log("no refreshToken");
    return NextResponse.redirect(new URL("/auth", req.url));
  }
  return response;
}

export const config = {
  matcher: ["/"],
};
