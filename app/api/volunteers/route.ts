import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// Ensure the volunteers table exists
async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS volunteers (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT,
      phone_no TEXT NOT NULL,
      town TEXT NOT NULL,
      lga TEXT NOT NULL,
      state_of_origin TEXT NOT NULL,
      interests TEXT[] NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phoneNo, town, lga, stateOfOrigin, interests } = body;

    if (!fullName || !phoneNo || !town || !lga || !stateOfOrigin || !interests?.length) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await ensureTable();

    await sql`
      INSERT INTO volunteers (full_name, email, phone_no, town, lga, state_of_origin, interests)
      VALUES (
        ${fullName},
        ${email || null},
        ${phoneNo},
        ${town},
        ${lga},
        ${stateOfOrigin},
        ${interests}
      )
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error("Volunteer API POST error:", error);
    return NextResponse.json({ error: "Failed to save volunteer data." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    // Simple token-based protection for the dashboard
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");
    if (secret !== process.env.DASHBOARD_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await ensureTable();

    const volunteers = await sql`
      SELECT * FROM volunteers ORDER BY created_at DESC
    `;

    return NextResponse.json({ volunteers }, { status: 200 });
  } catch (error: any) {
    console.error("Volunteer API GET error:", error);
    return NextResponse.json({ error: "Failed to fetch volunteers." }, { status: 500 });
  }
}
