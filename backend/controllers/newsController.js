import axios from "axios";
import asyncHandler from "../utils/asyncHandler.js";

// Simple, reliable server-memory cache store
let newsCache = {
    data: null,
    expiry: null
};

// Cache duration: 10 minutes (10 * 60 * 1000 ms)
const CACHE_DURATION = 600000; 

/**
 * @desc    Fetch global financial market news
 * @route   GET /api/news
 * @access  Public/Private
 */
export const getnews = asyncHandler(async (req, res) => {
    const currentTime = Date.now();

    // 1. Evaluate Cache HIT condition
    if (newsCache.data && newsCache.expiry && currentTime < newsCache.expiry) {
        // Return cached payload instantly with a tracking custom response header
        res.setHeader("X-Cache-Status", "HIT");
        return res.status(200).json(newsCache.data);
    }

    // Verify key exists before dispatching request
    if (!process.env.FINNHUB_API_KEY) {
        res.status(500);
        throw new Error("News provider API configuration key is missing on the server.");
    }

    // 2. Cache MISS: Query external provider with strict fallback limits
    const response = await axios.get('https://finnhub.io/api/v1/news', {
        params: {
            category: 'general',
            token: process.env.FINNHUB_API_KEY,
        },
        timeout: 5000 // Abort and fail gracefully if external API takes over 5 seconds
    });

    // 3. Update local cache metrics
    newsCache.data = response.data;
    newsCache.expiry = currentTime + CACHE_DURATION;

    res.setHeader("X-Cache-Status", "MISS");
    return res.status(200).json(response.data);
});