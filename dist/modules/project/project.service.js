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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paginate_1 = require("../../helper/paginate");
const csvConvert_middleware_1 = require("../../middleware/csvConvert.middleware");
const result_schema_1 = require("../result/result.schema");
const school_schema_1 = require("../school/school.schema");
const science_fair_schema_1 = require("../science-fair/science-fair.schema");
const user_schema_1 = require("../user/user.schema");
const project_schema_1 = require("./project.schema");
let ProjectService = class ProjectService {
    constructor(projectModel, userModel, schoolModel, resultModel, scienceFairModel) {
        this.projectModel = projectModel;
        this.userModel = userModel;
        this.schoolModel = schoolModel;
        this.resultModel = resultModel;
        this.scienceFairModel = scienceFairModel;
    }
    async create(data, user) {
        try {
            const model = new this.projectModel();
            const pCode = await this.projectModel.find({ $and: [{ scienceFairId: data.scienceFairId }, { isDeleted: false }] }).sort({ createdAt: -1 });
            let projectCode;
            if (pCode.length === 0) {
                projectCode = "100";
            }
            else {
                let code = pCode[0];
                const incr = +code.projectCode + 1;
                projectCode = incr.toString();
                const pro = await this.projectModel.findOne({ $and: [{ scienceFairId: data.scienceFairId }, { isDeleted: false }, { projectCode: projectCode }] });
                if (pro) {
                    const pCode1 = await this.projectModel.find({ $and: [{ scienceFairId: data.scienceFairId }, { isDeleted: false }] }).sort({ updatedAt: -1 });
                    let code1 = pCode1[0];
                    const incr1 = +code1.projectCode + 1;
                    projectCode = incr1.toString();
                }
            }
            model.name = data.name;
            model.description = data.description;
            model.addedBy = user._id;
            model.scienceFairId = data.scienceFairId;
            model.schoolId = data.schoolId;
            model.categoryId = data.categoryId;
            model.strandId = data.strandId;
            model.projectCode = projectCode;
            if (data.subStrandId) {
                model.subStrandId = data.subStrandId;
            }
            if (data.judges) {
                model.judges = data.judges;
            }
            if (data.students) {
                model.students = data.students;
            }
            const project = await model.save();
            if (project) {
                return { message: "Project added successfully!!" };
            }
            return { message: "Project not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id) {
        try {
            const updateProject = await this.projectModel.findOneAndUpdate({ _id: id }, body);
            const data = await this.projectModel.findOne({ _id: id });
            if (updateProject !== null) {
                return { message: "Project updated successfully!!" };
            }
            return { message: "Project not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id) {
        try {
            const status = await this.projectModel.findOne({ id });
            if (!status) {
                return { message: "This Project is not exist!!" };
            }
            const checkResult = await this.resultModel.find({ $and: [{ projectId: status._id }, { isDeleted: false }] });
            if (checkResult.length !== 0) {
                return { message: "You cannot delete the project, which is already been evaluated!!" };
            }
            if (status.isDeleted === true) {
                return { message: "Project Already Deleted!!!" };
            }
            const check = await this.projectModel.findOneAndUpdate({ id }, {
                isActive: false,
                isDeleted: true,
                projectCode: ""
            });
            if (!check) {
                return { message: "Project is not deleted!!" };
            }
            return { message: `Project Deleted Successfully!!` };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getProjectById(id) {
        try {
            const getById = await this.projectModel.findOne({ $and: [{ _id: id, isDeleted: false }] })
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
                const checkSchool = await this.schoolModel.findOne({ _id: auth.schoolId });
                option.query['schoolId'] = checkSchool._id;
            }
            if (auth.userRole === 3) {
                const checkJudge = await this.userModel.findOne({ _id: auth._id });
                option.query['judges'] = { $ne: checkJudge._id };
                option.query['students'] = { $not: { $size: 0 } };
                option.query['averageScore'] = { $in: [0, null] };
                option.query['finalEvalCount'] = { $lt: 3 };
            }
            const projectData = await (0, paginate_1.paginate)(option, this.projectModel);
            if (!projectData) {
                return { message: "No Data!!" };
            }
            return projectData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async projectCSV(auth, id) {
        try {
            const scienceFair = await this.scienceFairModel.findById(id);
            let data = await this.projectModel.find()
                .select('-__v -createdAt -updatedAt -isActive -isDeleted')
                .populate('schoolId', 'name')
                .populate('strandId', 'strandName')
                .populate('categoryId', 'name')
                .populate('judges', 'firstName')
                .populate('students', 'firstName')
                .where('scienceFairId').equals(id)
                .where('isDeleted').equals(false);
            if (auth.userRole === 2) {
                data = await this.projectModel.find()
                    .select('-__v -createdAt -updatedAt -isActive -isDeleted')
                    .populate('schoolId', 'name')
                    .populate('strandId', 'strandName')
                    .populate('categoryId', 'name')
                    .populate('judges', 'firstName')
                    .populate('students', 'firstName')
                    .where('scienceFairId').equals(id)
                    .where('schoolId').equals(auth.schoolId)
                    .where('isDeleted').equals(false);
            }
            if (!data) {
                return { message: "Data not found!!" };
            }
            let csvData = [], stud = "", jud = "";
            if (data.length === 0) {
                return { message: 'Cannot download the empty file!!' };
            }
            data.forEach(element => {
                element.students.forEach(element1 => {
                    stud = stud + element1['_id'] + '-' + element1['firstName'] + ",";
                });
                element.judges.forEach(element2 => {
                    jud = jud + element2['_id'] + '-' + element2['firstName'] + ",";
                });
                csvData.push({
                    "Project Code": element.projectCode, "Project Name": element.name, "Description": element.description,
                    "Strand": element.strandId['strandName'], "Category": element.categoryId['name'], "School": element.schoolId['name'],
                    "Score": element.averageScore || 0, "Rank": element.rank || 0, "Judges": jud || 0, "Students": stud || 0
                });
                stud = "";
                jud = "";
            });
            const fileNM = scienceFair.name.replace(/\s/g, '_') + "_" + '_ProjectList';
            await (0, csvConvert_middleware_1.convertIntoCSV)(csvData, fileNM);
            return { fileName: `${fileNM}.csv` };
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(school_schema_1.School.name)),
    __param(3, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(4, (0, mongoose_1.InjectModel)(science_fair_schema_1.ScienceFair.name)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map