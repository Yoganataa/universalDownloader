import { Request, Response } from "express";
import { fetchLinkedinData  } from "../services/linkedinService";

async function handleLinkedinDownload(req: Request, res: Response) {
  try {
    const url = req.query.url as string;
    if (!url) {
      return res
        .status(400)
        .json({ success: false, error: "Missing 'url' query parameter." });
    }

    const data = await fetchLinkedinData(url);
    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}

export { handleLinkedinDownload  };
