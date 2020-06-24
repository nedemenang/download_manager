import { InjectQueue } from '@nestjs/bull';
import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { Queue } from 'bull';
import { DownloadService } from './download.service';
import { Logger } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';

@Controller('downloads')
export class DownloadController {
  private readonly logger = new Logger(DownloadController.name);
  constructor(
    @InjectQueue('download') private readonly downloadQueue: Queue,
    private readonly downloadService: DownloadService,
    private gateway: AppGateway,
  ) {}

  @Post('')
  async download(@Body('url') url: string) {
    console.log(url);
    if (url === '') {
      throw new BadRequestException('Please include download link');
    }
    const statusId = await this.downloadService.insertDownload(url, 'pending');
    this.downloadQueue
      .add('download', {
        statusId,
      })
      .then(value => {
        console.log('Sent to queue...');
        this.gateway.wss.emit('downloads');
      });
    return {
      statusId,
    };
  }

  @Get()
  async getAllDownloads() {
    const result = await this.downloadService.getDownloads();
    return { items: result };
  }
}
