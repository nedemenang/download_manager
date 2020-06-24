import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Download } from './download.model';

@Injectable()
export class DownloadService {
  constructor(
    @InjectModel('Download') private readonly downloadModel: Model<Download>,
  ) {}

  async insertDownload(url: string, status: string) {
    try {
      const newDownload = new this.downloadModel({
        url,
        status,
      });
      const result = await newDownload.save();
      return result.id as string;
    } catch (err) {
      throw new InternalServerErrorException('Error occured');
    }
  }
  async getDownloads() {
    try {
      const downloads = await this.downloadModel
        .find()
        .sort('-createdAt')
        .exec();
      return downloads.map(download => ({
        id: download.id,
        url: download.url,
        status: download.status,
        updatedAt: download.updatedAt,
      }));
    } catch (err) {
      throw new InternalServerErrorException('Error occured');
    }
  }
  async updateProduct(statusId: string, status: string) {
    let download;
    try {
      download = await this.downloadModel.findById(statusId).exec();
    } catch (err) {
      throw new NotFoundException('Could not find download');
    }
    if (status) {
      try {
        download.status = status;
        download.updatedAt = Date.now();
        await download.save();
      } catch (error) {
        throw new InternalServerErrorException('Error occured');
      }
    }
  }
}
