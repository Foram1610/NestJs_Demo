/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { PaginateModel } from 'mongoose';
import { ProjectDocument } from '../project/project.schema';
import { StudentDocument } from '../student/student.schema';
import { UserDocument } from '../user/user.schema';
import { CreateSchoolDto } from './dto/createSchool.dto';
import { School, SchoolDocument } from './school.schema';
export declare class SchoolService {
    private schoolModel;
    private studentModel;
    private userModel;
    private projectModel;
    constructor(schoolModel: PaginateModel<SchoolDocument>, studentModel: PaginateModel<StudentDocument>, userModel: PaginateModel<UserDocument>, projectModel: PaginateModel<ProjectDocument>);
    create(data: CreateSchoolDto): Promise<{
        message: any;
    }>;
    update(body: any, id: any): Promise<{
        message: any;
    }>;
    delete(id: any): Promise<{
        message: any;
    }>;
    getSchoolById(id: any): Promise<(import("mongoose").Document<unknown, {}, SchoolDocument> & Omit<School & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | {
        message: any;
    }>;
    getData(body: any, auth: any): Promise<any>;
}
