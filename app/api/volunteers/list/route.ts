import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  const auth = await verifyAuth(req);
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const volunteers = await sql`
      SELECT * FROM volunteers ORDER BY created_at DESC
    `;
    return NextResponse.json({ volunteers }, { status: 200 });
  } catch (err: any) {
    console.error("Volunteer list error:", err);
    return NextResponse.json({ error: "Failed to fetch volunteers." }, { status: 500 });
  }
}
