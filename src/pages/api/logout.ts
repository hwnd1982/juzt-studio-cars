import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log();

  res.setHeader(
    "Set-Cookie",
    `session='deleted'; path=${new URL(req.headers.host!).hostname}; Expires=${new Date(0).toUTCString()}`
  );
  res.status(200).json({ user: { name: "" }, expires: null });
}
