import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = serialize("session", "deleted", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
  });

  res.setHeader("Set-Cookie", cookies);
  res.status(200).json({ user: { name: "" }, expires: null });
}
