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
exports.ScienceFairController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const image_middleware_1 = require("../../middleware/image.middleware");
const createScienceFair_dto_1 = require("./dto/createScienceFair.dto");
const science_fair_service_1 = require("./science-fair.service");
let ScienceFairController = class ScienceFairController {
    constructor(scienceFairService) {
        this.scienceFairService = scienceFairService;
    }
    async createUser(createScienceFairDto, file, res) {
        let addScienceFair;
        if (file !== undefined) {
            const fileData = file;
            addScienceFair = await this.scienceFairService.create(createScienceFairDto, fileData.filename);
        }
        else {
            addScienceFair = await this.scienceFairService.create(createScienceFairDto);
        }
        return res.send(addScienceFair);
    }
    async update(req, res, file, params) {
        let updateScienceFair;
        if (file !== undefined) {
            const fileData = file;
            updateScienceFair = await this.scienceFairService.update(req.body, params.id, fileData.filename);
        }
        else {
            updateScienceFair = await this.scienceFairService.update(req.body, params);
        }
        return res.send(updateScienceFair);
    }
    async delete(res, params) {
        const deleteScienceFair = await this.scienceFairService.delete(params.id);
        return res.send(deleteScienceFair);
    }
    async getScienceFairById(res, params) {
        const scienceFair = await this.scienceFairService.getScienceFairById(params.id);
        return res.send(scienceFair);
    }
    async getAllScienceFair(req, res) {
        const scienceFairData = await this.scienceFairService.getData(req.body);
        return res.send(scienceFairData);
    }
    async lockScienceFair(res, params) {
        const scienceFair = await this.scienceFairService.lockScienceFair(params.id);
        return res.send(scienceFair);
    }
    async getTotalCount(req, res, params) {
        const scienceFair = await this.scienceFairService.totalCount(req.user, params.id);
        return res.send(scienceFair);
    }
    async getAllScienceFairPublic(req, res) {
        const scienceFairData = await this.scienceFairService.getScienceFairPublic();
        return res.send(scienceFairData);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', image_middleware_1.upload)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createScienceFair_dto_1.CreateScienceFairDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', image_middleware_1.upload)),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "getScienceFairById", null);
__decorate([
    (0, common_1.Post)('/getAll'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "getAllScienceFair", null);
__decorate([
    (0, common_1.Get)('/lockScienceFair/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "lockScienceFair", null);
__decorate([
    (0, common_1.Get)('/getTotalCount/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "getTotalCount", null);
__decorate([
    (0, common_1.Post)('/getAllScienceFairPublic'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ScienceFairController.prototype, "getAllScienceFairPublic", null);
ScienceFairController = __decorate([
    (0, common_1.Controller)('api/science-fair'),
    __metadata("design:paramtypes", [science_fair_service_1.ScienceFairService])
], ScienceFairController);
exports.ScienceFairController = ScienceFairController;
//# sourceMappingURL=science-fair.controller.js.map