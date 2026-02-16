import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

import { swaggerUi, swaggerSpec } from "./swagger";

import blueskyRoute from "./routes/bluesky";
import capcutRoute from "./routes/capcut";
import dailymotionRoute from "./routes/dailymotion";
import douyinRoute from "./routes/douyin";
import kuaishouRoute from "./routes/kuaishou";
import linkedinRoute from "./routes/linkedin";
import facebookInstaRoute from "./routes/facebookInsta";
import pinterestRoute from "./routes/pinterest";
import redditRoute from "./routes/reddit";
import spotifyRoute from "./routes/spotify";
import snapchatRoute from "./routes/snapchat";
import soundcloudRoute from "./routes/soundcloud";
import teraboxRoute from "./routes/terabox";
import threadsRoute from "./routes/threads";
import tiktokRoute from "./routes/tiktok";
import tumblrRoute from "./routes/tumblr";
import twitterRoute from "./routes/twitter";
import youtubeRoute from "./routes/youtube";

const app = express();

app.use(cors());
app.use(express.json());
app.set("json spaces", 2);
app.use(morgan("dev"));

// API Routes
app.use("/api/bluesky", blueskyRoute);
app.use("/api/capcut", capcutRoute);
app.use("/api/dailymotion", dailymotionRoute);
app.use("/api/douyin", douyinRoute);
app.use("/api/kuaishou", kuaishouRoute);
app.use("/api/linkedin", linkedinRoute);
app.use("/api/meta", facebookInstaRoute);
app.use("/api/pinterest", pinterestRoute);
app.use("/api/reddit", redditRoute);
app.use("/api/spotify", spotifyRoute);
app.use("/api/snapchat", snapchatRoute);
app.use("/api/soundcloud", soundcloudRoute);
app.use("/api/terabox", teraboxRoute);
app.use("/api/threads", threadsRoute);
app.use("/api/tiktok", tiktokRoute);
app.use("/api/tumblr", tumblrRoute);
app.use("/api/twitter", twitterRoute);
app.use("/api/youtube", youtubeRoute);

// Swagger Documentation
// 1. Serve the Swagger UI HTML at the root URL
app.get("/", swaggerUi.setup(swaggerSpec));

// 2. Serve static assets (JS, CSS) required by Swagger UI
//    This allows /swagger-ui-bundle.js, etc. to be served
app.use("/", swaggerUi.serve);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
  });
});

// Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({
    success: false,
    error: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
