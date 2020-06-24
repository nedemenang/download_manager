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
exports.DownloadController = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const download_service_1 = require("./download.service");
const common_2 = require("@nestjs/common");
const app_gateway_1 = require("../app.gateway");
let DownloadController = (() => {
    var DownloadController_1;
    let DownloadController = DownloadController_1 = class DownloadController {
        constructor(downloadQueue, downloadService, gateway) {
            this.downloadQueue = downloadQueue;
            this.downloadService = downloadService;
            this.gateway = gateway;
            this.logger = new common_2.Logger(DownloadController_1.name);
        }
        async download(url) {
            console.log(url);
            if (url === '') {
                throw new common_1.BadRequestException('Please include download link');
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
        async getAllDownloads() {
            const result = await this.downloadService.getDownloads();
            return { items: result };
        }
    };
    __decorate([
        common_1.Post(''),
        __param(0, common_1.Body('url')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], DownloadController.prototype, "download", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DownloadController.prototype, "getAllDownloads", null);
    DownloadController = DownloadController_1 = __decorate([
        common_1.Controller('downloads'),
        __param(0, bull_1.InjectQueue('download')),
        __metadata("design:paramtypes", [Object, download_service_1.DownloadService,
            app_gateway_1.AppGateway])
    ], DownloadController);
    return DownloadController;
})();
exports.DownloadController = DownloadController;
//# sourceMappingURL=download.controller.js.map