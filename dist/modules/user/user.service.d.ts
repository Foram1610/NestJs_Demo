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
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './user.schema';
import { SchoolDocument } from '../school/school.schema';
import { ScienceFairDocument } from '../science-fair/science-fair.schema';
import { ProjectDocument } from '../project/project.schema';
import { ResultDocument } from '../result/result.schema';
export declare class UserService {
    private userModel;
    private schoolModel;
    private resultModel;
    private scienceFairModel;
    private projectModel;
    constructor(userModel: PaginateModel<UserDocument>, schoolModel: PaginateModel<SchoolDocument>, resultModel: PaginateModel<ResultDocument>, scienceFairModel: PaginateModel<ScienceFairDocument>, projectModel: PaginateModel<ProjectDocument>);
    hashPassword(password: String, salt_rounds?: string): Promise<string>;
    create(data: CreateUserDto, user: any, fileName?: String): Promise<"User already exits!!" | {
        message: any;
    }>;
    update(body: any, id: any, file?: any): Promise<{
        message: any;
    }>;
    delete(id: any, auth: any): Promise<{
        message: any;
    }>;
    getUserById(id: any): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & Omit<User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | {
        message: any;
    }>;
    getData(body: any): Promise<any>;
    userCSV(auth: any, id: any): Promise<{
        fileName: string;
        message?: undefined;
    } | {
        message: any;
        fileName?: undefined;
    }>;
}
