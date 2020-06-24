import { Queue } from 'bull';
import { DownloadService } from './download.service';
import { AppGateway } from 'src/app.gateway';
export declare class DownloadController {
    private readonly downloadQueue;
    private readonly downloadService;
    private gateway;
    private readonly logger;
    constructor(downloadQueue: Queue, downloadService: DownloadService, gateway: AppGateway);
    download(url: string): Promise<{
        statusId: string;
    }>;
    getAllDownloads(): Promise<{
        items: {
            id: string;
            url: string;
            status: string;
            updatedAt: Date;
        }[];
    }>;
}
