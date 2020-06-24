import { Job } from 'bull';
import { DownloadService } from './download.service';
import { AppGateway } from 'src/app.gateway';
export declare class DownloadProcessor {
    private readonly downloadService;
    private gateway;
    private readonly logger;
    constructor(downloadService: DownloadService, gateway: AppGateway);
    handleDownload(job: Job): Promise<void>;
}
