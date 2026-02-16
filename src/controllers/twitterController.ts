import { Request, Response } from "express";
import { twitterDownloader  } from "../services/twitterService";

async function handleTwitterDownload(req: Request, res: Response) {
  const url = req.query.url as string;

  if (!url) {
    return res
      .status(400)
      .json({ success: false, error: "Missing 'url' query parameter." });
  }

  try {
    const data = await twitterDownloader(url);
    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export { handleTwitterDownload  };
