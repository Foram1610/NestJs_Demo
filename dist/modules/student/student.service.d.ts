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
import { ScienceFairDocument } from '../science-fair/science-fair.schema';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Student, StudentDocument } from './student.schema';
export declare class StudentService {
    private readonly studentModel;
    private readonly projectModel;
    private readonly scienceFairModel;
    constructor(studentModel: PaginateModel<StudentDocument>, projectModel: PaginateModel<ProjectDocument>, scienceFairModel: PaginateModel<ScienceFairDocument>);
    create(data: CreateStudentDto, auth: any): Promise<{
        message: any;
    }>;
    update(body: any, id: any): Promise<{
        message: any;
    }>;
    delete(id: any): Promise<{
        message: any;
    }>;
    getStudentById(id: any): Promise<(import("mongoose").Document<unknown, {}, StudentDocument> & Omit<Student & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | {
        message: any;
    }>;
    getData(body: any, auth: any): Promise<any>;
    studentCSV(auth: any, id: any): Promise<{
        fileName: string;
        message?: undefined;
    } | {
        message: any;
        fileName?: undefined;
    }>;
}
