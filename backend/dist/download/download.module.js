"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const download_controller_1 = require("./download.controller");
const download_processor_1 = require("./download.processor");
const download_service_1 = require("./download.service");
const download_model_1 = require("./download.model");
const mongoose_1 = require("@nestjs/mongoose");
const app_gateway_1 = require("../app.gateway");
let DownloadModule = (() => {
    let DownloadModule = class DownloadModule {
    };
    DownloadModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Download', schema: download_model_1.DownloadSchema }]),
                bull_1.BullModule.registerQueue({
                    name: 'download',
                    redis: {
                        host: process.env.REDIS_HOST || '127.0.0.1',
                        port: 6379,
                    },
                }),
            ],
            controllers: [download_controller_1.DownloadController],
            providers: [download_service_1.DownloadService, download_processor_1.DownloadProcessor, app_gateway_1.AppGateway],
        })
    ], DownloadModule);
    return DownloadModule;
})();
exports.DownloadModule = DownloadModule;
//# sourceMappingURL=download.module.js.map