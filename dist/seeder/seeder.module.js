"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("../modules/category/category.schema");
const strand_schema_1 = require("../modules/strand/strand.schema");
const user_schema_1 = require("../modules/user/user.schema");
const category_seeder_service_1 = require("./category.seeder.service");
const strand_seeder_service_1 = require("./strand.seeder.service");
const user_seeder_service_1 = require("./user.seeder.service");
const nestjs_seeder_1 = require("nestjs-seeder");
const config_1 = require("../config/config");
(0, nestjs_seeder_1.seeder)({
    imports: [
        mongoose_1.MongooseModule.forRoot(config_1.default.MONGODB_URL),
        mongoose_1.MongooseModule.forFeature([
            { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
            { name: category_schema_1.Category.name, schema: category_schema_1.CategorySchema },
            { name: strand_schema_1.Strand.name, schema: strand_schema_1.StrandSchema }
        ])
    ],
    providers: [category_seeder_service_1.CategorySeederService, strand_seeder_service_1.StrandSeederService, user_seeder_service_1.UserSeederService]
}).run([category_seeder_service_1.CategorySeederService, strand_seeder_service_1.StrandSeederService, user_seeder_service_1.UserSeederService]);
class SeederModule {
}
exports.SeederModule = SeederModule;
//# sourceMappingURL=seeder.module.js.map