import { Request, Response } from "express";
import facebookInsta from "../services/facebookInstaService";

async function handleFacebookInstaDownload(req: Request, res: Response) {
  const url = req.query.url as string;

  if (!url) {
    return res.status(400).json({ error: "Missing 'url' query parameter." });
  }

  try {
    const data = await facebookInsta(url);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}

export { handleFacebookInstaDownload  };
