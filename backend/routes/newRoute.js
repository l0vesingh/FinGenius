import express from 'express';
import { getnews } from "../controllers/newsController.js";

const router = express.Router();

// Changed endpoint path to root "/" because the base prefix in server.js 
// is already "/api/news", making this cleanly map to: GET /api/news
router.get("/", getnews);

export default router;