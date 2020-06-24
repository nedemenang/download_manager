import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { DownloadController } from './download.controller';
import { DownloadProcessor } from './download.processor';
import { DownloadService } from './download.service';
import { DownloadSchema } from './download.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AppGateway } from 'src/app.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Download', schema: DownloadSchema }]),
    BullModule.registerQueue({
      name: 'download',
      redis: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: 6379,
      },
    }),
  ],
  controllers: [DownloadController],
  providers: [DownloadService, DownloadProcessor, AppGateway],
})
export class DownloadModule {}
