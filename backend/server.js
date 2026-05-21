import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import db from "./config/mongooseconnect.js"; // Establishes database lifecycle
import newsRoutes from "./routes/newRoute.js";
import AuthRoutes from "./routes/Authroute.js";

// 1. Environmental Configuration
dotenv.config();

const app = express();
const port = process.env.PORT || 3000

// 2. Global Security & Parsing Middleware
app.use(helmet()); // Sets protective HTTP headers (Clickjacking, CSP, XSS protection)
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.CLIENT_URL // Restrict to your live frontend in production
        : true, // Allows any local origin during development
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Base Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        activeStatus: true,
        error: false,
        timestamp: new Date()
    });
});

// 4. API Application Routes
app.use("/api/news", newsRoutes);
app.use("/api/auth", AuthRoutes);

// 5. Catch-All Route for Missing Endpoints (404)
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// 6. Centralized Global Error Handler Middleware
// Any error forwarded via next(err) automatically lands here instead of crashing the process
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        error: true,
        message: err.message,
        // Only leak structural stack traces while debugging locally
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, 
    });
});

// 7. Server Initialization Lifecycle
app.listen(port, () => {
    console.log(`🚀 FinGenius backend operating in [${process.env.NODE_ENV || 'development'}] mode on port ${port}`);
});