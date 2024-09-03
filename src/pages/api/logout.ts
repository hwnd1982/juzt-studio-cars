import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", `session='deleted'; path=/; Expires=${new Date(0).toUTCString()}; HttpOnly`);
  res.status(200).json({ user: { name: "" }, expires: null });
}
