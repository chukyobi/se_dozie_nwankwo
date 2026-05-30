import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED = ["/dashboard"];
const AUTH_PAGES = ["/dashboard/login", "/dashboard/signup"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED.some(p => pathname.startsWith(p)) &&
    !AUTH_PAGES.some(p => pathname.startsWith(p));

  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/dashboard/login";
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/dashboard/login";
    const res = NextResponse.redirect(loginUrl);
    res.cookies.delete("admin_token");
    return res;
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
