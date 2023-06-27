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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const data_1 = require("../../utils/data");
const bcrypt = require("bcryptjs");
const config_1 = require("../../config/config");
const paginate_1 = require("../../helper/paginate");
const school_schema_1 = require("../school/school.schema");
const science_fair_schema_1 = require("../science-fair/science-fair.schema");
const project_schema_1 = require("../project/project.schema");
const result_schema_1 = require("../result/result.schema");
const csvConvert_middleware_1 = require("../../middleware/csvConvert.middleware");
let UserService = class UserService {
    constructor(userModel, schoolModel, resultModel, scienceFairModel, projectModel) {
        this.userModel = userModel;
        this.schoolModel = schoolModel;
        this.resultModel = resultModel;
        this.scienceFairModel = scienceFairModel;
        this.projectModel = projectModel;
    }
    async hashPassword(password, salt_rounds = config_1.default.SALT_ROUNDS) {
        const salt = +salt_rounds;
        return bcrypt.hash(password, salt);
    }
    async create(data, user, fileName) {
        try {
            const model = new this.userModel();
            const { firstName, lastName, email, password, userRole, schoolId, scienceFairId, proficient_languages } = data;
            const checkUser = await this.userModel.findOne({ email });
            if (checkUser) {
                return "User already exits!!";
            }
            model.password = await this.hashPassword(password);
            model.firstName = firstName;
            model.lastName = lastName;
            model.email = email;
            model.userRole = userRole;
            model.scienceFairId = scienceFairId;
            model.addedBy = user._id;
            if (schoolId) {
                model.schoolId = schoolId;
            }
            if (proficient_languages) {
                model.proficient_languages = proficient_languages;
            }
            if (fileName) {
                model.avatar = fileName;
            }
            model.avatar = "def.png";
            const userData = await model.save();
            if (userData) {
                return { message: "User added successfully!!" };
            }
            return { message: "User not added!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async update(body, id, file) {
        try {
            if (file) {
                body.avatar = file;
            }
            if (body.hasOwnProperty('password')) {
                const hash = await this.hashPassword(body.password);
                body.password = hash;
            }
            const updateUser = await this.userModel.findOneAndUpdate({ _id: id }, body);
            if (updateUser !== null) {
                return { message: "User updated successfully!!" };
            }
            return { message: "User not updated!!" };
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async delete(id, auth) {
        try {
            const status = await this.userModel.findOne({ _id: id });
            if (!status) {
                return { message: "This User is not exist!!" };
            }
            if (auth.userRole === 1) {
                const checkUser = await this.userModel.find({ $and: [{ addedBy: id }, { isDeleted: false }] });
                if (checkUser.length !== 0) {
                    return { message: "You cannot delete the admin who added other users!!" };
                }
            }
            if (auth.userRole === 3) {
                const checkUser = await this.resultModel.find({ userId: id });
                if (checkUser.length !== 0) {
                    return { message: "You cannot delete the judge who evaluated projects!!" };
                }
            }
            if (auth.userRole === 2) {
                const checkProject = await this.projectModel.find({ addedBy: id });
                if (checkProject.length !== 0) {
                    return { message: "You cannot delete the school admin who has assigned projects!!" };
                }
            }
            if (status.isDeleted === true) {
                return { message: "This User is already deleted!!!" };
            }
            else {
                const check = await this.userModel.findOneAndRemove({ _id: id });
                if (!check) {
                    return { message: "User is not deleted!!" };
                }
                return { message: `User Deleted Successfully!!` };
            }
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async getUserById(id) {
        try {
            const getById = await this.userModel.findOne({ $and: [{ _id: id, isDeleted: false }] });
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
            option.query['addedBy'] = { $ne: null };
            const userData = await (0, paginate_1.paginate)(option, this.userModel);
            if (!userData) {
                return { message: "No Data!!" };
            }
            return userData;
        }
        catch (error) {
            return { message: error.message };
        }
    }
    async userCSV(auth, id) {
        try {
            const scienceFair = await this.scienceFairModel.findById(id);
            let data = await this.userModel.find()
                .select('-__v -createdAt -updatedAt -isActive -isDeleted')
                .populate('schoolId', 'name')
                .where('addedBy').equals(auth._id)
                .where('isDeleted').equals(false)
                .where('scienceFairId').equals(auth._id);
            if (!data) {
                return { message: "Science fair not found!!" };
            }
            let csvData = [];
            if (data.length === 0) {
                return { message: 'Cannot download the empty file!!' };
            }
            data.forEach(element => {
                let role, sch = "", lang = "";
                if (element.userRole === data_1.dataCheck.ROLE.ADMIN) {
                    role = 'Admin';
                }
                if (element.userRole === data_1.dataCheck.ROLE['SCHOOL-ADMIN']) {
                    role = 'School Admin';
                    sch = element.schoolId['name'];
                }
                if (element.userRole === data_1.dataCheck.ROLE.JUDGE) {
                    role = 'Judge';
                    element.proficient_languages.forEach(element1 => {
                        lang = lang + element1['value'] + ",";
                    });
                }
                csvData.push({
                    "User Id ": element._id.toString(), "User's firstname": element.firstName, "User's lastname": element.lastName,
                    "Email": element.email, "User Role": role, "School": sch, "Proficient Languages": lang
                });
            });
            const fileNM = scienceFair.name.replace(/\s/g, '_') + "_" + '_UserList';
            await (0, csvConvert_middleware_1.convertIntoCSV)(csvData, fileNM);
            return { fileName: `${fileNM}.csv` };
        }
        catch (error) {
            return { message: error.message };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(school_schema_1.School.name)),
    __param(2, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(3, (0, mongoose_1.InjectModel)(science_fair_schema_1.ScienceFair.name)),
    __param(4, (0, mongoose_1.InjectModel)(project_schema_1.Project.name)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map