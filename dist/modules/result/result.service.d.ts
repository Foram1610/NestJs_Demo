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
import { Result, ResultDocument } from './result.schema';
import { Project, ProjectDocument } from '../project/project.schema';
import { ScienceFairDocument } from '../science-fair/science-fair.schema';
import { StrandDocument } from '../strand/strand.schema';
import { CategoryDocument } from '../category/category.schema';
import { SchoolDocument } from '../school/school.schema';
export declare class ResultService {
    private readonly resultModel;
    private readonly projectModel;
    private readonly scienceFairModel;
    private readonly schoolModel;
    private readonly strandModel;
    private readonly categoryModel;
    constructor(resultModel: PaginateModel<ResultDocument>, projectModel: PaginateModel<ProjectDocument>, scienceFairModel: PaginateModel<ScienceFairDocument>, schoolModel: PaginateModel<SchoolDocument>, strandModel: PaginateModel<StrandDocument>, categoryModel: PaginateModel<CategoryDocument>);
    create(body: any, auth: any): Promise<{
        message: any;
    }>;
    getAllResult(body: any, auth: any): Promise<any>;
    projectData(scienceFairId: any, catId: any, strId: any): Promise<Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>, never>, never>, never>, never>[]>;
    allProjectData(scienceFairId: any, catId: any, strId: any): Promise<Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>, never>, never>, never>, never>[]>;
    averageScoreCal(id: any): Promise<void>;
    approveEvaluation(body: any, id: any): Promise<{
        message: any;
    }>;
    getResultById(id: any): Promise<{
        result: string;
        message?: undefined;
    } | {
        result: import("mongoose").Document<unknown, {}, ResultDocument> & Omit<Result & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
        message?: undefined;
    } | {
        message: any;
        result?: undefined;
    }>;
    getAllScore(body: any): Promise<{
        Youth: {
            indigenousYouthProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceYouthProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
        Junior: {
            indigenousJuniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceJuniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
        Senior: {
            indigenousSeniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceSeniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
        Intermediate: {
            indigenousIntermediateProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceIntermediateProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
    } | {
        message: any;
    }>;
    getAllProject(body: any): Promise<any>;
    getTopScore(body: any): Promise<{
        Youth: {
            indigenousYouthProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceYouthProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
        Junior: {
            indigenousJuniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceJuniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
        Senior: {
            indigenousSeniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceSeniorProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
        Intermediate: {
            indigenousIntermediateProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
            euroScienceIntermediateProject: Omit<Omit<Omit<Omit<Omit<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<Project & Document & {
                _id: import("mongoose").Types.ObjectId;
            }, never>, never>, never>, never>, never>, never>[];
        };
    } | {
        message: any;
    }>;
    convertToCSVFile(body: any): Promise<{
        fileName: string;
        message?: undefined;
    } | {
        message: any;
        fileName?: undefined;
    }>;
    rawResultCSV(auth: any, id: any): Promise<{
        fileName: string;
        message?: undefined;
    } | {
        message: any;
        fileName?: undefined;
    }>;
}
