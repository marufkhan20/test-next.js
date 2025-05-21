// app/api/test/[[...slug]]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug?: string[] } }
) {
  return NextResponse.json({ slug: params.slug || [] });
}
