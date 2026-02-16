import { Request, Response } from "express";
import { fetchTikTokData  } from "../services/tiktokService";

async function handleTikTokDownload(req: Request, res: Response) {
  try {
    const url = req.query.url as string;
    if (!url) {
      return res
        .status(400)
        .json({ success: false, error: "Missing 'url' query parameter." });
    }

    const data = await fetchTikTokData(url);

    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export { handleTikTokDownload  };
