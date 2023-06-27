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
exports.ProjectSchema = exports.Project = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const pagination_constant_1 = require("../../utils/pagination.constant");
let Project = class Project {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Strand' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Project.prototype, "strandId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Strand' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Project.prototype, "subStrandId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Project.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'School' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Project.prototype, "schoolId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "projectCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0, min: 0, }),
    __metadata("design:type", Number)
], Project.prototype, "averageScore", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Project.prototype, "rank", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0, min: 0, }),
    __metadata("design:type", Number)
], Project.prototype, "evaluationCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0, min: 0, }),
    __metadata("design:type", Number)
], Project.prototype, "finalEvalCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose.Schema.Types.ObjectId], ref: 'Student', array: true }),
    __metadata("design:type", Array)
], Project.prototype, "students", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'ScienceFair' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Project.prototype, "scienceFairId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose.Schema.Types.ObjectId], ref: 'User', array: true }),
    __metadata("design:type", Array)
], Project.prototype, "judges", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Project.prototype, "addedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Project.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Project.prototype, "isDeleted", void 0);
Project = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Project);
exports.Project = Project;
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(Project);
mongoosePaginate.paginate.options = pagination_constant_1.pagination_data.PAGINATE_OPTIONS;
exports.ProjectSchema.plugin(mongoosePaginate);
//# sourceMappingURL=project.schema.js.map