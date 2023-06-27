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
exports.ResultSchema = exports.Result = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const pagination_constant_1 = require("../../utils/pagination.constant");
let Result = class Result {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "projectId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'ScienceFair' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "scienceFairId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Strand' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "strandId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Strand' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Result.prototype, "subStrandId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Result.prototype, "feedback", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Result.prototype, "score1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Result.prototype, "score2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Result.prototype, "score3", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Result.prototype, "finalScore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: "needs_approval", enum: ["needs_approval", "approved", "rejected"] }),
    __metadata("design:type", String)
], Result.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Result.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Result.prototype, "isDeleted", void 0);
Result = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Result);
exports.Result = Result;
exports.ResultSchema = mongoose_1.SchemaFactory.createForClass(Result);
mongoosePaginate.paginate.options = pagination_constant_1.pagination_data.PAGINATE_OPTIONS;
exports.ResultSchema.plugin(mongoosePaginate);
//# sourceMappingURL=result.schema.js.map