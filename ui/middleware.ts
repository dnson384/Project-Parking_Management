import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_PATHS = ["/login", "/register", "/"];

function getRoleFromToken(token?: string) {
  if (!token) return null;
  try {
    const decoded = jwt.decode(token) as { role?: string };
    return decoded?.role ?? null;
  } catch {
    return null;
  }
}

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  const role = getRoleFromToken(accessToken?.value);

  const isPublicPath = PUBLIC_PATHS.some((path) =>
    path === "/" ? pathname === path : pathname.startsWith(path),
  );

  // Đã đăng nhập
  if (refreshToken) {
    if (isPublicPath && pathname !== "/") {
      if (role === "ADMIN") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  }

  // Chưa đăng nhập
  if (!isPublicPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
