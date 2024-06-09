import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/auth" || path === "/api/auth/signin" || path === "/auth/signup";

  const token = request.cookies.get("next-auth.session-token")?.value || "";
  

  if (isPublicPath && token !== "") {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  if (!isPublicPath && (token === "" || token == undefined)) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/home",
    "/api/auth/signin",
    "/auth",
    "/auth/signup",
    "/profile",
    "/verify",
    "/",
  ],
};
