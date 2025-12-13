/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import { getPayload } from "payload";
import config from "@payload-config";
import { NextRequest, NextResponse } from "next/server";

const payload = await getPayload({ config });

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const url = new URL(req.url);

  try {
    // Reconstruct the API path
    const apiPath = `/${slug.join("/")}`;

    // Handle different API routes
    if (apiPath.includes("/users/me")) {
      const token = req.cookies.get("payload-token")?.value;
      if (!token) {
        return NextResponse.json({ user: null }, { status: 200 });
      }

      const { user } = await payload.auth({ headers: req.headers });
      return NextResponse.json({ user });
    }

    // For other routes, return a basic response
    return NextResponse.json({ message: "API endpoint" }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  return NextResponse.json({ message: "POST endpoint" }, { status: 200 });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  return NextResponse.json({ message: "PATCH endpoint" }, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  return NextResponse.json({ message: "DELETE endpoint" }, { status: 200 });
}
