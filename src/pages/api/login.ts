import { decrypt, login } from "@/shared";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.body;
  const session = await login(user);

  res.setHeader(
    "Set-Cookie",
    `session=${session}); path=/; Expires=${new Date(Date.now() + 600 * 1000).toUTCString()}; HttpOnly`
  );
  // res.setHeader("Expires", ``);
  res.status(200).json(await decrypt(session));
}
