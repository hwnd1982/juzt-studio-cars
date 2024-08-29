import { SignJWT, jwtVerify } from "jose";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date(Date.now() + 600 * 1000))
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const verify = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    const { payload } = verify;

    return payload;
  } catch (err) {
    return null;
  }
}

export async function login(user: string) {
  const expires = new Date(Date.now() + 600 * 1000);
  const session = await encrypt({ user, expires });

  return session;
}

export async function logout() {
  // Destroy the session
  // cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession(cookies: Partial<{ [key: string]: string }>) {
  const session = Object.keys(cookies).includes("session") ? cookies["session"] : null;

  if (!session) return null;

  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const res = NextResponse.next();

  if (!session) {
    // res.cookies.delete({ name: "session" });
    return;
  }

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);

  if (parsed) {
    console.log(parsed);
  }

  if (parsed) {
    parsed.expires = new Date(Date.now() + 600 * 1000);
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
    });
    return res;
  }
}
