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
import { ResultDocument } from '../result/result.schema';
import { SchoolDocument } from '../school/school.schema';
import { StudentDocument } from '../student/student.schema';
import { UserDocument } from '../user/user.schema';
import { CreateScienceFairDto } from './dto/createScienceFair.dto';
import { ScienceFair, ScienceFairDocument } from './science-fair.schema';
export declare class ScienceFairService {
    private scienceFairModel;
    private studentModel;
    private projectModel;
    private resultModel;
    private userModel;
    private schoolModel;
    constructor(scienceFairModel: PaginateModel<ScienceFairDocument>, studentModel: PaginateModel<StudentDocument>, projectModel: PaginateModel<ProjectDocument>, resultModel: PaginateModel<ResultDocument>, userModel: PaginateModel<UserDocument>, schoolModel: PaginateModel<SchoolDocument>);
    create(data: CreateScienceFairDto, file?: any): Promise<{
        message: any;
    }>;
    update(body: any, id: any, file?: any): Promise<{
        message: any;
    }>;
    delete(id: any): Promise<{
        message: any;
    }>;
    getScienceFairById(id: any): Promise<(import("mongoose").Document<unknown, {}, ScienceFairDocument> & Omit<ScienceFair & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | {
        message: any;
    }>;
    getData(body: any): Promise<any>;
    lockScienceFair(id: any): Promise<{
        message: any;
    }>;
    totalCount(auth: any, id: any): Promise<{
        student: number;
        project: number;
    } | {
        message: any;
    }>;
    getScienceFairPublic(): Promise<any>;
}
