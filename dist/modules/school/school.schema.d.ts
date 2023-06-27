import * as mongoose from "mongoose";
export type SchoolDocument = School & Document;
export declare class School {
    name: String;
    schoolCode: String;
    scienceFairId: mongoose.Schema.Types.ObjectId;
    location1: String;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const SchoolSchema: mongoose.Schema<School, mongoose.Model<School, any, any, any, mongoose.Document<unknown, any, School> & Omit<School & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, School, mongoose.Document<unknown, {}, mongoose.FlatRecord<School>> & Omit<mongoose.FlatRecord<School> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
