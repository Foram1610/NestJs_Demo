import * as mongoose from "mongoose";
export type ProjectDocument = Project & Document;
export declare class Project {
    name: String;
    description: String;
    strandId: mongoose.Schema.Types.ObjectId;
    subStrandId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    schoolId: mongoose.Schema.Types.ObjectId;
    projectCode: String;
    averageScore: Number;
    rank: Number;
    evaluationCount: Number;
    finalEvalCount: Number;
    students: [mongoose.Schema.Types.ObjectId];
    scienceFairId: mongoose.Schema.Types.ObjectId;
    judges: [mongoose.Schema.Types.ObjectId];
    addedBy: mongoose.Schema.Types.ObjectId;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const ProjectSchema: mongoose.Schema<Project, mongoose.Model<Project, any, any, any, mongoose.Document<unknown, any, Project> & Omit<Project & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Project, mongoose.Document<unknown, {}, mongoose.FlatRecord<Project>> & Omit<mongoose.FlatRecord<Project> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
