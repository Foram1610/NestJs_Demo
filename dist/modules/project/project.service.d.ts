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
import { ResultDocument } from '../result/result.schema';
import { SchoolDocument } from '../school/school.schema';
import { ScienceFairDocument } from '../science-fair/science-fair.schema';
import { UserDocument } from '../user/user.schema';
import { CreateProjectDto } from './dto/createProject.dto';
import { Project, ProjectDocument } from './project.schema';
export declare class ProjectService {
    private projectModel;
    private userModel;
    private schoolModel;
    private resultModel;
    private scienceFairModel;
    constructor(projectModel: PaginateModel<ProjectDocument>, userModel: PaginateModel<UserDocument>, schoolModel: PaginateModel<SchoolDocument>, resultModel: PaginateModel<ResultDocument>, scienceFairModel: PaginateModel<ScienceFairDocument>);
    create(data: CreateProjectDto, user: any): Promise<{
        message: any;
    }>;
    update(body: any, id: any): Promise<{
        message: any;
    }>;
    delete(id: any): Promise<{
        message: any;
    }>;
    getProjectById(id: any): Promise<(import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | {
        message: any;
    }>;
    getData(body: any, auth: any): Promise<any>;
    projectCSV(auth: any, id: any): Promise<{
        fileName: string;
        message?: undefined;
    } | {
        message: any;
        fileName?: undefined;
    }>;
}
