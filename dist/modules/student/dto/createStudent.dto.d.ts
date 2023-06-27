import mongoose from "mongoose";
export declare class CreateStudentDto {
    firstName: String;
    lastName: String;
    scienceFairId: mongoose.Schema.Types.ObjectId;
    schoolId: mongoose.Schema.Types.ObjectId;
    grade: String;
}
