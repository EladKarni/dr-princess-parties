import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const secret = searchParams.get("secret");
  const global = searchParams.get("global");
  const collection = searchParams.get("collection");

  // If this is a Payload admin preview request (has global or collection param but no secret)
  // we need to fetch and return the data directly for the iframe
  if ((global || collection) && !secret) {
    try {
      const payload = await getPayload({ config });

      // Enable draft mode for this request
      const draft = await draftMode();
      draft.enable();

      let data;
      if (global) {
        data = await payload.findGlobal({
          slug: global,
          draft: true,
        });
      } else if (collection) {
        const id = searchParams.get("id");
        if (!id) {
          return new Response("Missing id parameter", { status: 400 });
        }
        data = await payload.findByID({
          collection,
          id,
          draft: true,
        });
      }

      // Return JSON response for Payload admin iframe
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": request.headers.get("origin") || "*",
          "Access-Control-Allow-Credentials": "true",
        },
      });
    } catch (error) {
      console.error("Preview error:", error);
      return new Response("Preview failed", { status: 500 });
    }
  }

  // For regular preview mode (with secret)
  if (secret !== process.env.PAYLOAD_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable draft mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to the url or home page
  redirect(url || "/");
}
