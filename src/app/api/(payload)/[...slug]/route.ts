/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { NextRequest } from "next/server";
import {
  REST_DELETE,
  REST_GET,
  REST_PATCH,
  REST_POST,
} from "@payloadcms/next/routes";

export const GET = (
  req: NextRequest,
  context: { params: Promise<{ route: string[] }> }
) => REST_GET(req, context);

export const POST = (
  req: NextRequest,
  context: { params: Promise<{ route: string[] }> }
) => REST_POST(req, context);

export const DELETE = (
  req: NextRequest,
  context: { params: Promise<{ route: string[] }> }
) => REST_DELETE(req, context);

export const PATCH = (
  req: NextRequest,
  context: { params: Promise<{ route: string[] }> }
) => REST_PATCH(req, context);
