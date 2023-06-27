import mongoose from "mongoose";
export declare class CreateUserDto {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    userRole: Number;
    scienceFairId?: mongoose.Schema.Types.ObjectId;
    schoolId?: mongoose.Schema.Types.ObjectId;
    proficient_languages?: Object[];
    avatar?: String;
    addedBy?: mongoose.Schema.Types.ObjectId;
}
