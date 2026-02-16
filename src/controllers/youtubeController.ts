import { Request, Response } from "express";
import { fetchYouTubeData  } from "../services/youtubeService";

async function handleYouTubeDownload(req: Request, res: Response) {
  try {
    const url = req.query.url as string;
    if (!url) {
      return res
        .status(400)
        .json({ success: false, error: "Missing 'url' query parameter." });
    }

    const data = await fetchYouTubeData(url);
    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export { handleYouTubeDownload  };
