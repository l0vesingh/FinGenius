import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assetType: {
        type: String,
        required: true,
        enum: ["STOCK", "MUTUAL_FUND"], // Enforces strict asset types
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    value: {
        type: Number,
        required: true,
        default: 0,
    },
    units: {
        type: Number,
        required: true,
        default: 0,
    },
    externalId: {
        type: String, // Maps back to external financial api/broker IDs
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});

// Critical performance optimization:
// Compound index ensures that looking up a specific user's portfolio assets runs at O(1) speed
assetSchema.index({ userId: 1, assetType: 1 });

export default mongoose.model("Asset", assetSchema);