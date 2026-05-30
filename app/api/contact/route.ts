import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.privateemail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECIPIENT || "hello@dozienwankwo.org",
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Message — Dozie Nwankwo Campaign
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px; font-weight: bold; color: #555; width: 120px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px;">${phone || "Not provided"}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Subject:</td><td style="padding: 8px;">${subject}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f4f4f4; border-left: 4px solid #dc2626; border-radius: 4px;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #333;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Sent from the Contact Us form on dozienwankwo.org
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
