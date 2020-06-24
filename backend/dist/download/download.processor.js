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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const download_service_1 = require("./download.service");
const app_gateway_1 = require("../app.gateway");
let DownloadProcessor = (() => {
    var DownloadProcessor_1;
    let DownloadProcessor = DownloadProcessor_1 = class DownloadProcessor {
        constructor(downloadService, gateway) {
            this.downloadService = downloadService;
            this.gateway = gateway;
            this.logger = new common_1.Logger(DownloadProcessor_1.name);
        }
        async handleDownload(job) {
            this.downloadService.updateProduct(job.data.statusId, 'in-progress');
            this.logger.debug('Download started...');
            this.gateway.wss.emit('downloads');
            setTimeout(() => {
                this.downloadService.updateProduct(job.data.statusId, 'done');
                this.logger.debug('Download done...');
                this.gateway.wss.emit('downloads');
            }, 10000);
        }
    };
    __decorate([
        bull_1.Process('download'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DownloadProcessor.prototype, "handleDownload", null);
    DownloadProcessor = DownloadProcessor_1 = __decorate([
        bull_1.Processor('download'),
        __metadata("design:paramtypes", [download_service_1.DownloadService,
            app_gateway_1.AppGateway])
    ], DownloadProcessor);
    return DownloadProcessor;
})();
exports.DownloadProcessor = DownloadProcessor;
//# sourceMappingURL=download.processor.js.map