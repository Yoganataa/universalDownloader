import { Request, Response } from "express";
import redditDownloader from "../services/redditService";

async function handleRedditDownload(req: Request, res: Response) {
  const url = req.query.url as string;
  if (!url) {
    return res.status(400).json({ error: "Missing 'url' query parameter." });
  }

  try {
    const result = await redditDownloader(url);
    res.json({ success: true, data: result });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}

export { handleRedditDownload  };
