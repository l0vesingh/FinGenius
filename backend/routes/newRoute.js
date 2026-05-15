import express from 'express';
const router = express.Router();
import {getnews} from "../controllers/newsController.js"

router.get("/getnews",getnews);

export default router;