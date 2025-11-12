import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the request is for the admin dashboard
  if (pathname.startsWith("/admin/dashboard")) {
    // Get the token from cookies
    const token = request.cookies.get("adminToken")?.value;

    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL("/admin", request.url);
      const response = NextResponse.redirect(loginUrl);
      return response;
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
