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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paginate_1 = require("../../helper/paginate");
const csvConvert_middleware_1 = require("../../middleware/csvConvert.middleware");
const project_schema_1 = require("../project/project.schema");
const science_fair_schema_1 = require("../science-fair/science-fair.schema");
const student_schema_1 = require("./student.schema");
let StudentService = class StudentService {
    constructor(studentModel, projectModel, scienceFairModel) {
        this.studentModel = studentModel;
        this.projectModel = projectModel;
        this.scienceFairModel = scienceFairModel;
    }
    async create(data, auth) {
        try {
            const model = new this.studentModel();
            let school = data.schoolId;
            if (auth.userRole === 2) {
                school = auth.schoolId;
            }
            model.firstName = data.firstName;
            model.lastName = data.lastName;
            model.grade = data.grade;
            model.scienceFairId = data.scienceFairId;
            model.schoolId = school;
            const student = await model.save();
            if (student) {
                return { message: "Student added successfully!!" };
            }
            return { message: "Student not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id) {
        try {
            const updateStudent = await this.studentModel.findOneAndUpdate({ _id: id }, body);
            if (updateStudent !== null) {
                return { message: "Student updated successfully!!" };
            }
            return { message: "Student not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id) {
        try {
            const status = await this.studentModel.findOne({ _id: id });
            if (!status) {
                return { message: "This Student is not exist!!" };
            }
            const checkProjects = await this.projectModel.find({ $and: [{ students: status._id }, { isDeleted: false }] });
            if (checkProjects.length !== 0) {
                return { message: "You cannot delete the student, who is assigned to the project!!!" };
            }
            if (status.isDeleted === true) {
                return { message: "This Student is already deleted!!!" };
            }
            const check = await this.studentModel.findOneAndUpdate({ _id: id }, {
                isActive: false,
                isDeleted: true
            });
            if (!check) {
                return { message: "Student is not deleted!!" };
            }
            return { message: "Student Deleted Successfully!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getStudentById(id) {
        try {
            const getById = await this.studentModel.findOne({ $and: [{ _id: id, isDeleted: false }] })
                .select('-__v -createdAt -updatedAt');
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
                option.query['schoolId'] = auth.schoolId;
            }
            const studentData = await (0, paginate_1.paginate)(option, this.studentModel);
            if (!studentData) {
                return { message: "No Data!!" };
            }
            return studentData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async studentCSV(auth, id) {
        try {
            const scienceFair = await this.scienceFairModel.findById(id);
            let data = await this.studentModel.find()
                .select('-__v -createdAt -updatedAt -isActive -isDeleted')
                .populate('schoolId', 'name')
                .where('scienceFairId').equals(id)
                .where('isDeleted').equals(false);
            if (auth.userRole === 2) {
                data = await this.studentModel.find()
                    .select('-__v -createdAt -updatedAt -isActive -isDeleted')
                    .populate('schoolId', 'name')
                    .where('scienceFairId').equals(id)
                    .where('schoolId').equals(auth.schoolId)
                    .where('isDeleted').equals(false);
            }
            if (!data) {
                return { message: "Students not found!!" };
            }
            let csvData = [];
            if (data.length === 0) {
                return { message: 'Cannot download the empty file!!' };
            }
            data.forEach(element => {
                csvData.push({
                    "Student Id": element._id.toString(), "Student's firstname": element.firstName, "Student's lastname": element.lastName,
                    "School Name": element.schoolId['name'] || "-", "Grade": element.grade
                });
            });
            const fileNM = scienceFair.name.replace(/\s/g, '_') + "_" + '_StudentList';
            await (0, csvConvert_middleware_1.convertIntoCSV)(csvData, fileNM);
            return { fileName: `${fileNM}.csv` };
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_schema_1.Student.name)),
    __param(1, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __param(2, (0, mongoose_1.InjectModel)(science_fair_schema_1.ScienceFair.name)),
    __metadata("design:paramtypes", [Object, Object, Object])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map