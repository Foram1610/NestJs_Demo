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
exports.ScienceFairService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paginate_1 = require("../../helper/paginate");
const project_schema_1 = require("../project/project.schema");
const result_schema_1 = require("../result/result.schema");
const school_schema_1 = require("../school/school.schema");
const student_schema_1 = require("../student/student.schema");
const user_schema_1 = require("../user/user.schema");
const science_fair_schema_1 = require("./science-fair.schema");
let ScienceFairService = class ScienceFairService {
    constructor(scienceFairModel, studentModel, projectModel, resultModel, userModel, schoolModel) {
        this.scienceFairModel = scienceFairModel;
        this.studentModel = studentModel;
        this.projectModel = projectModel;
        this.resultModel = resultModel;
        this.userModel = userModel;
        this.schoolModel = schoolModel;
    }
    async create(data, file) {
        try {
            const model = new this.scienceFairModel();
            model.name = data.name;
            model.date = data.date;
            model.location1 = data.location;
            model.description = data.description;
            if (file) {
                model.image = file;
            }
            model.image = "science-fair.webp";
            const scienceFair = await model.save();
            if (scienceFair) {
                return { message: "Science Fair added successfully!!" };
            }
            return { message: "Science Fair not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id, file) {
        try {
            if (file) {
                body.image = file;
            }
            console.log('Body data ==>', body);
            const updateScienceFair = await this.scienceFairModel.findOneAndUpdate({ _id: id }, body);
            if (updateScienceFair !== null) {
                return { message: "Science Fair updated successfully!!" };
            }
            return { message: "Science Fair not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id) {
        try {
            const status = await this.scienceFairModel.findOne({ _id: id });
            if (!status) {
                return { message: "This User is not exist!!" };
            }
            const checkStudent = await this.studentModel.find({ $and: [{ scienceFairId: status._id }, { isDeleted: false }] });
            const checkUser = await this.userModel.find({ $and: [{ scienceFairId: status._id }, { isDeleted: false }] });
            const checkProject = await this.projectModel.find({ $and: [{ scienceFairId: status._id }, { isDeleted: false }] });
            if (checkProject.length !== 0 && checkStudent.length !== 0 && checkUser.length !== 0) {
                return { message: "You cannot delete the science fair which already has assigned students, projects or users!!" };
            }
            if (status.isDeleted === true) {
                return { message: "This Science Fair is already deleted!!!" };
            }
            const check = await this.scienceFairModel.findOneAndUpdate({ _id: id }, {
                isActive: false,
                isDeleted: true
            });
            if (!check) {
                return { message: "Science not deleted!!" };
            }
            return { message: "Science Fair Deleted Successfully!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getScienceFairById(id) {
        try {
            const getById = await this.scienceFairModel.findOne({ $and: [{ _id: id, isDeleted: false }] });
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
            const scienceFairData = await (0, paginate_1.paginate)(option, this.scienceFairModel);
            if (!scienceFairData) {
                return { message: "No Data!!" };
            }
            return scienceFairData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async lockScienceFair(id) {
        try {
            let toggle = true;
            const locked = await this.scienceFairModel.findOne({ $and: [{ _id: id }, { isDeleted: false }] });
            if (locked.isLocked === true) {
                toggle = false;
            }
            const check = await this.scienceFairModel.findOneAndUpdate({ _id: id }, {
                isLocked: toggle
            });
            if (!check) {
                return { message: "Science Fair not fouynd!!" };
            }
            if (toggle === true) {
                return { message: `Science Fair is Locked Now!!` };
            }
            else {
                return { message: `Science Fair is Unlocked Now!!` };
            }
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async totalCount(auth, id) {
        try {
            const resJson = { student: 0, project: 0 };
            const countFilter = [
                { scienceFairId: id }, { isDeleted: false }
            ];
            if (auth.userRole === 1) {
                const school = await this.schoolModel.find({ $and: countFilter });
                const userFilter = countFilter;
                userFilter.push({ userRole: { $ne: 1 } });
                const user = await this.userModel.find({ $and: userFilter });
                const results = await this.resultModel.find({ $and: countFilter });
                const topScore = await this.projectModel.find({
                    $and: [{ scienceFairId: id }, { isDeleted: false },
                        { rank: { $lt: 4 } }, { averageScore: { $ne: 0 } }, { averageScore: { $ne: null } }]
                });
                resJson['school'] = school.length;
                resJson['users'] = user.length;
                resJson['result'] = results.length;
                resJson['topScore'] = topScore.length;
            }
            if (auth.userRole === 2) {
                countFilter.push({ schoolId: auth.schoolId });
            }
            const student = await this.studentModel.find({ $and: countFilter });
            const project = await this.projectModel.find({ $and: countFilter });
            resJson['student'] = student.length;
            resJson['project'] = project.length;
            return resJson;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getScienceFairPublic() {
        try {
            const option = {};
            option.query['isDeleted'] = false;
            const scienceFairData = await (0, paginate_1.paginate)(option, this.scienceFairModel);
            if (!scienceFairData) {
                return { message: "No Data!!" };
            }
            return scienceFairData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
ScienceFairService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(science_fair_schema_1.ScienceFair.name)),
    __param(1, (0, mongoose_1.InjectModel)(student_schema_1.Student.name)),
    __param(2, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __param(3, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(4, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(5, (0, mongoose_1.InjectModel)(school_schema_1.School.name)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
], ScienceFairService);
exports.ScienceFairService = ScienceFairService;
//# sourceMappingURL=science-fair.service.js.map