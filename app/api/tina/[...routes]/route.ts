import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ message: "Tina API - use local mode" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: NextRequest) {
  return new Response(JSON.stringify({ message: "Tina API - use local mode" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
