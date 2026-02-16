import express from "express";
const router = express.Router();
import { handleLinkedinDownload  } from "../controllers/linkedinController";

/**
 * @swagger
 * /api/linkedin/download:
 *   get:
 *     summary: Download Linkedin media
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
router.get("/download", handleLinkedinDownload);

export default router;
