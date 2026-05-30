import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    return NextResponse.json({ admin: { id: payload.id, name: payload.name, email: payload.email } });
  } catch {
    return NextResponse.json({ error: "Invalid or expired session" }, { status: 401 });
  }
}
