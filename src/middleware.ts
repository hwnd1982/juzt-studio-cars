import { NextRequest } from "next/server";
import { updateSession } from "@/shared";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}
