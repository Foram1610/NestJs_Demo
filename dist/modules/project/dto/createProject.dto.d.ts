import mongoose from "mongoose";
export declare class CreateProjectDto {
    name: String;
    description: String;
    schoolId: mongoose.Schema.Types.ObjectId;
    scienceFairId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    strandId: mongoose.Schema.Types.ObjectId;
    subStrandId?: mongoose.Schema.Types.ObjectId;
    judges?: [mongoose.Schema.Types.ObjectId];
    students?: [mongoose.Schema.Types.ObjectId];
    addedBy: mongoose.Schema.Types.ObjectId;
    projectCode: String;
}
