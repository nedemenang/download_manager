import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { DownloadService } from './download.service';
import { AppGateway } from 'src/app.gateway';

@Processor('download')
export class DownloadProcessor {
  private readonly logger = new Logger(DownloadProcessor.name);

  constructor(
    private readonly downloadService: DownloadService,
    private gateway: AppGateway,
  ) {}

  @Process('download')
  async handleDownload(job: Job) {
    //   get Id from queue, update to in-progress, delay for 10 seconds after delay update status to done
    this.downloadService.updateProduct(job.data.statusId, 'in-progress');
    this.logger.debug('Download started...');
    this.gateway.wss.emit('downloads');
    setTimeout(() => {
      this.downloadService.updateProduct(job.data.statusId, 'done');
      this.logger.debug('Download done...');
      this.gateway.wss.emit('downloads');
    }, 10000);
  }
}
