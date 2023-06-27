import * as mongoose from "mongoose";
export type ResultDocument = Result & Document;
export declare class Result {
    userId: mongoose.Schema.Types.ObjectId;
    projectId: mongoose.Schema.Types.ObjectId;
    scienceFairId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    strandId: mongoose.Schema.Types.ObjectId;
    subStrandId: mongoose.Schema.Types.ObjectId;
    feedback: String;
    score1: Number;
    score2: Number;
    score3: Number;
    finalScore: Number;
    status: String;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const ResultSchema: mongoose.Schema<Result, mongoose.Model<Result, any, any, any, mongoose.Document<unknown, any, Result> & Omit<Result & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Result, mongoose.Document<unknown, {}, mongoose.FlatRecord<Result>> & Omit<mongoose.FlatRecord<Result> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
