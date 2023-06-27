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
exports.ResultController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const result_service_1 = require("./result.service");
let ResultController = class ResultController {
    constructor(resulService) {
        this.resulService = resulService;
    }
    async addResult(req, res) {
        const result = await this.resulService.create(req.body, req.user);
        return res.send(result);
    }
    async getAllResult(req, res) {
        const result = await this.resulService.getAllResult(req.body, req.auth);
        return res.send(result);
    }
    async getResultById(req, res, param) {
        const result = await this.resulService.getResultById(param.id);
        return res.send(result);
    }
    async approveEvaluation(req, res, param) {
        const result = await this.resulService.approveEvaluation(req.body, param.id);
        return res.send(result);
    }
    async getTopScore(req, res) {
        const result = await this.resulService.getTopScore(req.body);
        return res.send(result);
    }
    async getAllScore(req, res) {
        const result = await this.resulService.getAllProject(req.body);
        return res.send(result);
    }
    async rawResultCSV(req, res, param) {
        const result = await this.resulService.rawResultCSV(req.user, param.scienceFairId);
        return res.send(result);
    }
    async convertToCSV(req, res) {
        const result = await this.resulService.convertToCSVFile(req.body);
        return res.send(result);
    }
    downloadFile(fileName, res) {
        return res.sendFile(fileName, { root: 'public/csv' });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "addResult", null);
__decorate([
    (0, common_1.Post)('/getAll'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "getAllResult", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "getResultById", null);
__decorate([
    (0, common_1.Post)('/approveEvaluation/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "approveEvaluation", null);
__decorate([
    (0, common_1.Post)('/topScore'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "getTopScore", null);
__decorate([
    (0, common_1.Post)('/allScore'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "getAllScore", null);
__decorate([
    (0, common_1.Get)('/rawResultCSV/:scienceFairId'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "rawResultCSV", null);
__decorate([
    (0, common_1.Post)('/convertToCSV'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "convertToCSV", null);
__decorate([
    (0, common_1.Get)('/CSVFile/:fileName'),
    __param(0, (0, common_1.Param)('csv')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ResultController.prototype, "downloadFile", null);
ResultController = __decorate([
    (0, common_1.Controller)('result'),
    __metadata("design:paramtypes", [result_service_1.ResultService])
], ResultController);
exports.ResultController = ResultController;
//# sourceMappingURL=result.controller.js.map