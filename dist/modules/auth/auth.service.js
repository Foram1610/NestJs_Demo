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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user/user.schema");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async login(data) {
        try {
            const { email, password } = data;
            const checkUser = await this.userModel.findOne({ email });
            if (!checkUser) {
                return { message: "User does not exists!!" };
            }
            const compare = await bcrypt.compare(password, checkUser.password);
            if (compare === false) {
                return { message: "Invalid password!!" };
            }
            const token = this.jwtService.sign({ id: checkUser._id, role: checkUser.userRole });
            const responseSend = {
                token: token,
                message: "Login Successfully!!"
            };
            return responseSend;
        }
        catch (error) {
            return error;
        }
    }
    async validateUser(id) {
        try {
            const checkUser = await this.userModel.findOne({ _id: id }).select('-updatedAt -createdAt -password -__v -resetPasswordToken');
            if (checkUser) {
                return checkUser;
            }
            return console.error();
        }
        catch (error) {
            return error;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map