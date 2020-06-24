import * as mongoose from 'mongoose';

export const DownloadSchema = new mongoose.Schema({
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

export interface Download extends mongoose.Document {
  id: string;
  url: string;
  status: string;
  updatedAt: Date;
}
