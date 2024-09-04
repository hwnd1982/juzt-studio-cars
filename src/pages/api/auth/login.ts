import { decrypt, login } from "@/shared";
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.body;
  const session = await login(user);

  const cookies = serialize("session", session, {
    path: "/",
    expires: new Date(Date.now() + 600 * 1000),
    httpOnly: true,
  });

  res.setHeader("Set-Cookie", cookies);
  res.status(200).json(await decrypt(session));
}
