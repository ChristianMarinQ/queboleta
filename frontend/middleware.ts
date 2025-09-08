import { NextRequest, NextResponse } from "next/server";
import { locales } from "@/config";
import createMiddleware from "next-intl/middleware";

export const _config = {
  matcher: ["/", "/(es|en)/:path*"],
};

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/auth/login", "/auth/register"];

export function _middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.includes(path);

  const token = req.cookies.get("token")?.value;

  if (
    isProtectedRoute &&
    token === undefined &&
    token === null &&
    token === ""
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // redirect to home if trying to access auth public route
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export default createMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
