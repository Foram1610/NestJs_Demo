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
exports.StrandSchema = exports.Strand = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const pagination_constant_1 = require("../../utils/pagination.constant");
let Strand = class Strand {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Strand.prototype, "strandName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Strand', default: null }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Strand.prototype, "parentStrand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Strand.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Strand.prototype, "isDeleted", void 0);
Strand = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Strand);
exports.Strand = Strand;
exports.StrandSchema = mongoose_1.SchemaFactory.createForClass(Strand);
mongoosePaginate.paginate.options = pagination_constant_1.pagination_data.PAGINATE_OPTIONS;
exports.StrandSchema.plugin(mongoosePaginate);
//# sourceMappingURL=strand.schema.js.map