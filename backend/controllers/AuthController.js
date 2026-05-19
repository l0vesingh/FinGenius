import user_model from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * @desc    Register a new user
 * @route   POST /api/auth/signup
 * @access  Public
 */
export const register = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    // 1. Check if user already exists (prevents database unique duplication crash)
    const userExists = await user_model.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("A user with this email already exists");
    }

    // 2. Modern clean Promise-based hashing (no nested callbacks!)
    const salt = await bcrypt.genSalt(Number(process.env.SALT) || 10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create user record
    const user = await user_model.create({
        firstname,
        lastname,
        email,
        password: hashedPassword
    });

    // 4. Generate JWT Authentication Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // 5. Build a secure, clean user payload object (omitting the password hash)
    const safeUser = {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
    };

    // Configure security flags for token storage cookie
    res.cookie("token", token, {
        httpOnly: true, // Prevents XSS script execution reads
        secure: process.env.NODE_ENV === "production", // HTTPS only in prod
        sameSite: "strict"
    });

    return res.status(201).json({
        message: "User registered successfully",
        user: safeUser,
        token
    });
});

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // 1. Locate account profile by email
    const user = await user_model.findOne({ email });
    if (!user) {
        res.status(401); // 401 Unauthorized is more accurate than 404
        throw new Error("Invalid email or password");
    }

    // 2. Clean Promise-based verification check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid email or password"); // Keep messages vague for security
    }

    // 3. Sign access payload
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    const safeUser = {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
    };

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    });

    return res.status(200).json({
        message: "Login successful",
        user: safeUser,
        token
    });
});