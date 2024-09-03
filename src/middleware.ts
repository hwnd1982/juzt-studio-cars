import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "@/shared";
import { cookies } from "next/headers";

const protectedRoutes = ["/cars/new"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const cookie = cookies().get("session")?.value || "";
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.user.name) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return await updateSession(request);
}
