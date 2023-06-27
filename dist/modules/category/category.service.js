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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const paginate_1 = require("../../helper/paginate");
const category_schema_1 = require("./category.schema");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(data) {
        try {
            const model = new this.categoryModel();
            model.name = data.name;
            model.description = data.description;
            const category = await model.save();
            if (category) {
                return { message: "Category added successfully!!" };
            }
            return { message: "Category not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id) {
        try {
            const updateCategory = await this.categoryModel.findOneAndUpdate({ _id: id }, body);
            if (updateCategory !== null) {
                return { message: "Category updated successfully!!" };
            }
            return { message: "Category not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id) {
        try {
            const deleteCategory = await this.categoryModel.findOne({ $and: [{ _id: id, isDeleted: false }] });
            if (deleteCategory !== null) {
                await this.categoryModel.findOneAndUpdate({ _id: id }, {
                    isDeleted: true,
                    isActive: false
                });
                return { message: "Category deleted successully!!" };
            }
            return { message: "Category is not deleted!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getCategoryById(id) {
        try {
            const getById = await this.categoryModel.findOne({ $and: [{ _id: id, isDeleted: false }] })
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
            const categoryData = await (0, paginate_1.paginate)(option, this.categoryModel);
            if (!categoryData) {
                return { message: "No Data!!" };
            }
            return categoryData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map