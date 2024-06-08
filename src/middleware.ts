import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/api/auth/signin";

  const token = request.cookies.get("next-auth.session-token")?.value || "";
  

  // const afterLoginPath = path === '/dashboard/view' ;

  if (isPublicPath && token !== "") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && token === "") {
    return NextResponse.redirect(new URL("/api/auth/signin", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/api/auth/signin", "/signup", "/profile", "/verifyemail"],
};
