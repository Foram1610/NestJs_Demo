"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("../auth/auth.module");
const project_schema_1 = require("../project/project.schema");
const science_fair_schema_1 = require("../science-fair/science-fair.schema");
const student_controller_1 = require("./student.controller");
const student_schema_1 = require("./student.schema");
const student_service_1 = require("./student.service");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, mongoose_1.MongooseModule.forFeature([
                { name: student_schema_1.Student.name, schema: student_schema_1.StudentSchema },
                { name: project_schema_1.Project.name, schema: project_schema_1.ProjectSchema },
                { name: science_fair_schema_1.ScienceFair.name, schema: science_fair_schema_1.ScienceFairSchema }
            ])],
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService]
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map