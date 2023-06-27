"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("./config/config");
const user_module_1 = require("./modules/user/user.module");
const science_fair_module_1 = require("./modules/science-fair/science-fair.module");
const school_module_1 = require("./modules/school/school.module");
const auth_module_1 = require("./modules/auth/auth.module");
const category_module_1 = require("./modules/category/category.module");
const strand_module_1 = require("./modules/strand/strand.module");
const student_module_1 = require("./modules/student/student.module");
const project_module_1 = require("./modules/project/project.module");
const result_module_1 = require("./modules/result/result.module");
const seeder_module_1 = require("./seeder/seeder.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(config_1.default.MONGODB_URL),
            seeder_module_1.SeederModule,
            user_module_1.UserModule,
            science_fair_module_1.ScienceFairModule,
            school_module_1.SchoolModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            strand_module_1.StrandModule,
            student_module_1.StudentModule,
            project_module_1.ProjectModule,
            result_module_1.ResultModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map