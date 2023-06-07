import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = `${searchParams.get("query")}`;

  const res = await fetch(
    `https://api.unsplash.com/search/photos/?query=${encodeURIComponent(
      query
    )}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
