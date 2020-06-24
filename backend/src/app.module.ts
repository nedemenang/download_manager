import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DownloadModule } from './download/download.module';

@Module({
  imports: [
    DownloadModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/downloads'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
