import express from "express";
const router = express.Router();
import { handleYouTubeDownload  } from "../controllers/youtubeController";

/**
 * @swagger
 * /api/youtube/download:
 *   get:
 *     summary: Download Youtube media
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: The URL of the media
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       400:
 *         description: Missing URL parameter
 *       500:
 *         description: Internal Server Error
 */
router.get("/download", handleYouTubeDownload);

export default router;
