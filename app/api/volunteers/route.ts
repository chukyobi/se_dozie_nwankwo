import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

// Ensure the volunteers table exists
async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS volunteers (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone_no TEXT NOT NULL,
      town TEXT NOT NULL,
      lga TEXT NOT NULL,
      state TEXT NOT NULL,
      ward TEXT,
      polling_unit TEXT,
      interests TEXT[] NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phoneNo, town, lga, state, ward, pollingUnit, interests } = body;

    if (!fullName || !email || !phoneNo || !town || !lga || !state || !interests?.length) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await ensureTable();

    await sql`
      INSERT INTO volunteers (full_name, email, phone_no, town, lga, state, ward, polling_unit, interests)
      VALUES (
        ${fullName},
        ${email},
        ${phoneNo},
        ${town},
        ${lga},
        ${state},
        ${ward || null},
        ${pollingUnit || null},
        ${interests}
      )
    `;

    // Send Welcome Email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Dozie Nwankwo Campaign" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Welcome to the Movement! 🇳🇬 #Onyendozi2027",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #e53e3e;">Welcome to the Movement, ${fullName}!</h2>
            <p>Thank you for signing up to volunteer for the Dozie Nwankwo campaign. Your dedication to our shared vision is truly appreciated.</p>
            <p>As we prepare for the road ahead, your skills in <strong>${interests.join(", ")}</strong> will be instrumental in mobilizing our grassroots and ensuring a resounding success.</p>
            <p>A coordinator from your region (${state} State) will be reaching out to you soon with next steps and how you can get involved locally.</p>
            <br/>
            <p>Together, we will build a stronger, more prosperous future.</p>
            <p><strong>#Onyendozi2027</strong></p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #777;">Dozie Nwankwo Campaign Organization</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailErr) {
      console.error("Failed to send welcome email:", emailErr);
      // We don't fail the registration if email fails
    }

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
