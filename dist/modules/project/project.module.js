"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("../auth/auth.module");
const result_schema_1 = require("../result/result.schema");
const school_schema_1 = require("../school/school.schema");
const science_fair_schema_1 = require("../science-fair/science-fair.schema");
const user_schema_1 = require("../user/user.schema");
const project_controller_1 = require("./project.controller");
const project_schema_1 = require("./project.schema");
const project_service_1 = require("./project.service");
let ProjectModule = class ProjectModule {
};
ProjectModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                { name: project_schema_1.Project.name, schema: project_schema_1.ProjectSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: school_schema_1.School.name, schema: school_schema_1.SchoolSchema },
                { name: result_schema_1.Result.name, schema: result_schema_1.ResultSchema },
                { name: science_fair_schema_1.ScienceFair.name, schema: science_fair_schema_1.ScienceFairSchema }
            ]),
        ],
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService]
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map