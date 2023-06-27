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
exports.StrandService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const paginate_1 = require("../../helper/paginate");
const strand_schema_1 = require("./strand.schema");
let StrandService = class StrandService {
    constructor(strandModel) {
        this.strandModel = strandModel;
    }
    async create(data) {
        try {
            const model = new this.strandModel();
            model.strandName = data.strandName;
            if (data.hasOwnProperty('parentStrand')) {
                model.parentStrand = data.parentStrand;
            }
            const strand = await model.save();
            if (strand) {
                return { message: "Strand added successfully!!" };
            }
            return { message: "Strand not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id) {
        try {
            const updateStrand = await this.strandModel.findOneAndUpdate({ _id: id }, body);
            if (updateStrand !== null) {
                return { message: "Strand updated successfully!!" };
            }
            return { message: "Strand not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id) {
        try {
            const deleteStrand = await this.strandModel.findOne({ $and: [{ _id: id, isDeleted: false }] });
            if (deleteStrand !== null) {
                await this.strandModel.findOneAndUpdate({ _id: id }, {
                    isDeleted: true,
                    isActive: false
                });
                return { message: "Strand deleted successully!!" };
            }
            return { message: "Strand is not deleted!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getStrandById(id) {
        try {
            const getById = await this.strandModel.findOne({ $and: [{ _id: id, isDeleted: false }] })
                .populate('scienceFairId', 'name date location1')
                .select('-updatedAt -createdAt -__v');
            if (getById) {
                return getById;
            }
            return { message: "No data found!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getData(body) {
        try {
            const option = Object.assign({}, body);
            if (!option.hasOwnProperty('query')) {
                option['query'] = {};
            }
            option.query['isDeleted'] = false;
            const strandData = await (0, paginate_1.paginate)(option, this.strandModel);
            if (!strandData) {
                return { message: "No Data!!" };
            }
            return strandData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
StrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(strand_schema_1.Strand.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StrandService);
exports.StrandService = StrandService;
//# sourceMappingURL=strand.service.js.map