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
exports.StudentSchema = exports.Student = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const pagination_constant_1 = require("../../utils/pagination.constant");
let Student = class Student {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Student.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Student.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'ScienceFair' }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Student.prototype, "scienceFairId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'School', require: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Student.prototype, "schoolId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Adult"], require: true }),
    __metadata("design:type", String)
], Student.prototype, "grade", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Student.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Student.prototype, "isDeleted", void 0);
Student = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Student);
exports.Student = Student;
exports.StudentSchema = mongoose_1.SchemaFactory.createForClass(Student);
mongoosePaginate.paginate.options = pagination_constant_1.pagination_data.PAGINATE_OPTIONS;
exports.StudentSchema.plugin(mongoosePaginate);
//# sourceMappingURL=student.schema.js.map