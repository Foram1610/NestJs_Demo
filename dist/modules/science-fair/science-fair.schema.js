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
exports.ScienceFairSchema = exports.ScienceFair = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const pagination_constant_1 = require("../../utils/pagination.constant");
let ScienceFair = class ScienceFair {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ScienceFair.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], ScienceFair.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], ScienceFair.prototype, "location1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ScienceFair.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ScienceFair.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ScienceFair.prototype, "isLocked", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], ScienceFair.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ScienceFair.prototype, "isDeleted", void 0);
ScienceFair = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], ScienceFair);
exports.ScienceFair = ScienceFair;
exports.ScienceFairSchema = mongoose_1.SchemaFactory.createForClass(ScienceFair);
mongoosePaginate.paginate.options = pagination_constant_1.pagination_data.PAGINATE_OPTIONS;
exports.ScienceFairSchema.plugin(mongoosePaginate);
//# sourceMappingURL=science-fair.schema.js.map