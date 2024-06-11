import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicPaths = ["/auth", "/api/auth/signin"];
  const isPublicPath = publicPaths.includes(path);

  const token = request.cookies.get("__Secure-next-auth.session-token")?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/home",
    "/api/auth/signin",
    "/auth",
    "/profile",
    "/",
  ],
};
