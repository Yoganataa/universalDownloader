import { Request, Response } from "express";
import { fetchCapcutData  } from "../services/capcutService";

async function handleCapcutDownload(req: Request, res: Response) {
  const url = req.query.url as string;
  if (!url) {
    return res
      .status(400)
      .json({ success: false, error: "Missing 'url' query parameter." });
  }

  try {
    const data = await fetchCapcutData(url);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
}

export { handleCapcutDownload  };
