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
import { Model } from 'mongoose';
import { CreateStrandDto } from './dto/createStrand.dto';
import { Strand, StrandDocument } from './strand.schema';
export declare class StrandService {
    private strandModel;
    constructor(strandModel: Model<StrandDocument>);
    create(data: CreateStrandDto): Promise<{
        message: any;
    }>;
    update(body: any, id: any): Promise<{
        message: any;
    }>;
    delete(id: any): Promise<{
        message: any;
    }>;
    getStrandById(id: any): Promise<(import("mongoose").Document<unknown, {}, StrandDocument> & Omit<Strand & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | {
        message: any;
    }>;
    getData(body: any): Promise<any>;
}
