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
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paginate_1 = require("../../helper/paginate");
const project_schema_1 = require("../project/project.schema");
const student_schema_1 = require("../student/student.schema");
const user_schema_1 = require("../user/user.schema");
const school_schema_1 = require("./school.schema");
let SchoolService = class SchoolService {
    constructor(schoolModel, studentModel, userModel, projectModel) {
        this.schoolModel = schoolModel;
        this.studentModel = studentModel;
        this.userModel = userModel;
        this.projectModel = projectModel;
    }
    async create(data) {
        try {
            const model = new this.schoolModel();
            const schools = await this.schoolModel.find({ $and: [{ scienceFairId: data.scienceFairId }, { schoolCode: data.schoolCode }] });
            if (schools.length !== 0) {
                return { message: 'This school code is already generated for other school!!!' };
            }
            model.name = data.name;
            model.location1 = data.location;
            model.schoolCode = data.schoolCode;
            model.scienceFairId = data.scienceFairId;
            const school = await model.save();
            if (school) {
                return { message: "School added successfully!!" };
            }
            return { message: "School not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id) {
        try {
            if (body.hasOwnProperty('schoolCode')) {
                const checkCode = await this.schoolModel.find({ $and: [{ _id: { $ne: id } }, { schoolCode: body.schoolCode }] });
                if (checkCode.length > 0) {
                    return { message: "This school code is already generated for other school!!!" };
                }
            }
            const updateSchool = await this.schoolModel.findOneAndUpdate({ _id: id }, body);
            if (updateSchool !== null) {
                return { message: "School updated successfully!!" };
            }
            return { message: "School not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id) {
        try {
            const status = await this.schoolModel.findOne({ id });
            if (!status) {
                return { message: "This Project is not exist!!" };
            }
            const checkStudent = await this.studentModel.find({ $and: [{ schoolId: status._id }, { isDeleted: false }] });
            const checkUser = await this.userModel.find({ $and: [{ schoolId: status._id }, { isDeleted: false }] });
            const checkProject = await this.projectModel.find({ $and: [{ schoolId: status._id }, { isDeleted: false }] });
            if (checkStudent.length !== 0 || checkUser.length !== 0 || checkProject.length !== 0) {
                return { message: "You cannot delete the school, that already has school admins or students or projects!!" };
            }
            if (status.isDeleted === true) {
                return { message: "This school is already deleted!!!" };
            }
            const check = await this.schoolModel.findOneAndUpdate({ id }, {
                isActive: false,
                isDeleted: true,
                schoolCode: ""
            });
            if (!check) {
                return { message: "School is not deleted!!" };
            }
            return { message: "School Deleted Successfully!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getSchoolById(id) {
        try {
            const getById = await this.schoolModel.findOne({ $and: [{ _id: id, isDeleted: false }] })
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
    async getData(body, auth) {
        try {
            const option = Object.assign({}, body);
            if (!option.hasOwnProperty('query')) {
                option['query'] = {};
            }
            option.query['isDeleted'] = false;
            if (auth.userRole === 2) {
                option.query['scienceFairId'] = auth.scienceFairId;
            }
            const schoolData = await (0, paginate_1.paginate)(option, this.schoolModel);
            if (!schoolData) {
                return { message: "No Data!!" };
            }
            return schoolData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
SchoolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(school_schema_1.School.name)),
    __param(1, (0, mongoose_1.InjectModel)(student_schema_1.Student.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(3, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map