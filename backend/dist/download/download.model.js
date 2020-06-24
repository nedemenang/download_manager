"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadSchema = void 0;
const mongoose = require("mongoose");
exports.DownloadSchema = new mongoose.Schema({
    url: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'in-progress', 'done'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=download.model.js.map