"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DownloadService = (() => {
    let DownloadService = class DownloadService {
        constructor(downloadModel) {
            this.downloadModel = downloadModel;
        }
        async insertDownload(url, status) {
            try {
                const newDownload = new this.downloadModel({
                    url,
                    status,
                });
                const result = await newDownload.save();
                return result.id;
            }
            catch (err) {
                throw new common_1.InternalServerErrorException('Error occured');
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
            }
            catch (err) {
                throw new common_1.InternalServerErrorException('Error occured');
            }
        }
        async updateProduct(statusId, status) {
            let download;
            try {
                download = await this.downloadModel.findById(statusId).exec();
            }
            catch (err) {
                throw new common_1.NotFoundException('Could not find download');
            }
            if (status) {
                try {
                    download.status = status;
                    download.updatedAt = Date.now();
                    await download.save();
                }
                catch (error) {
                    throw new common_1.InternalServerErrorException('Error occured');
                }
            }
        }
    };
    DownloadService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('Download')),
        __metadata("design:paramtypes", [mongoose_2.Model])
    ], DownloadService);
    return DownloadService;
})();
exports.DownloadService = DownloadService;
//# sourceMappingURL=download.service.js.map