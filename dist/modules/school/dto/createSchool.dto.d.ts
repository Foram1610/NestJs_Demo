import mongoose from "mongoose";
export declare class CreateSchoolDto {
    name: String;
    location: String;
    schoolCode: String;
    scienceFairId: mongoose.Schema.Types.ObjectId;
}
