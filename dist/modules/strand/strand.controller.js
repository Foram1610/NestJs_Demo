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
exports.StrandController = void 0;
const common_1 = require("@nestjs/common");
const createStrand_dto_1 = require("./dto/createStrand.dto");
const strand_service_1 = require("./strand.service");
let StrandController = class StrandController {
    constructor(strandService) {
        this.strandService = strandService;
    }
    async createCategory(createStrandDto, res) {
        const addStrand = await this.strandService.create(createStrandDto);
        return res.send(addStrand);
    }
    async update(req, res, params) {
        const updateStrand = await this.strandService.update(req.body, params.id);
        return res.send(updateStrand);
    }
    async delete(res, params) {
        const deleteStrand = await this.strandService.delete(params.id);
        return res.send(deleteStrand);
    }
    async getStrandById(res, params) {
        const strand = await this.strandService.getStrandById(params.id);
        return res.send(strand);
    }
    async getAllStrand(req, res) {
        const strandData = await this.strandService.getData(req.body);
        return res.send(strandData);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStrand_dto_1.CreateStrandDto, Object]),
    __metadata("design:returntype", Promise)
], StrandController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StrandController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StrandController.prototype, "getStrandById", null);
__decorate([
    (0, common_1.Post)('/getAll'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StrandController.prototype, "getAllStrand", null);
StrandController = __decorate([
    (0, common_1.Controller)('api/strand'),
    __metadata("design:paramtypes", [strand_service_1.StrandService])
], StrandController);
exports.StrandController = StrandController;
//# sourceMappingURL=strand.controller.js.map