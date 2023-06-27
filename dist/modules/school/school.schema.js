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
exports.SchoolSchema = exports.School = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const pagination_constant_1 = require("../../utils/pagination.constant");
let School = class School {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], School.prototype, "schoolCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'ScienceFair' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], School.prototype, "scienceFairId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], School.prototype, "location1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], School.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], School.prototype, "isDeleted", void 0);
School = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], School);
exports.School = School;
exports.SchoolSchema = mongoose_1.SchemaFactory.createForClass(School);
mongoosePaginate.paginate.options = pagination_constant_1.pagination_data.PAGINATE_OPTIONS;
exports.SchoolSchema.plugin(mongoosePaginate);
//# sourceMappingURL=school.schema.js.map