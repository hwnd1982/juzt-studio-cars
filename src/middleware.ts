import { NextRequest, NextResponse } from "next/server";
import { decrypt, privateRoutes, routes, updateSession } from "@/shared";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const cookie = cookies().get("session")?.value || "";
  const session = await decrypt(cookie);
  const isProtectedRoute = privateRoutes.includes(path) && !session?.user.name;

  if (request.url.includes(routes.authApi)) {
    return NextResponse.next();
  }

  if (isProtectedRoute) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return await updateSession(request);
}
