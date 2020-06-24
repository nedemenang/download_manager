import * as mongoose from 'mongoose';
export declare const DownloadSchema: mongoose.Schema<any>;
export interface Download extends mongoose.Document {
    id: string;
    url: string;
    status: string;
    updatedAt: Date;
}
