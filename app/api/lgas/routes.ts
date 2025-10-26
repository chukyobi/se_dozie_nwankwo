// app/api/lgas/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state");

  if (!state) {
    return NextResponse.json({ error: "state is required" }, { status: 400 });
  }

  // API endpoint for LGAs in Nigeria
  const apiUrl = `https://nga-states-lga.onrender.com/?state=${encodeURIComponent(state)}`;

  try {
    const apiRes = await fetch(apiUrl);
    if (!apiRes.ok) {
      throw new Error("Failed to fetch LGAs");
    }
    const lgas = await apiRes.json();
    return NextResponse.json({ lgas });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
