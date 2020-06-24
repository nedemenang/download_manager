import { Model } from 'mongoose';
import { Download } from './download.model';
export declare class DownloadService {
    private readonly downloadModel;
    constructor(downloadModel: Model<Download>);
    insertDownload(url: string, status: string): Promise<string>;
    getDownloads(): Promise<{
        id: string;
        url: string;
        status: string;
        updatedAt: Date;
    }[]>;
    updateProduct(statusId: string, status: string): Promise<void>;
}
