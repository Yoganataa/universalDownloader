import { Request, Response } from "express";
import { fetchDouyinVideoInfo  } from "../services/douyinService";

async function handleDouyinDownload(req: Request, res: Response) {
  const url = req.query.url as string;
  if (!url) {
    return res
      .status(400)
      .json({ success: false, error: "Missing 'url' query parameter." });
  }

  try {
    const data = await fetchDouyinVideoInfo(url);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}

export { handleDouyinDownload  };
