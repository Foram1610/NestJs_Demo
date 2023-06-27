import * as mongoose from "mongoose";
export type UserDocument = User & Document;
export declare class User {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    schoolId: mongoose.Schema.Types.ObjectId;
    scienceFairId: mongoose.Schema.Types.ObjectId;
    proficient_languages: Object[];
    avatar: String;
    resetPasswordToken: String;
    expireTokenTime: Date;
    userRole: Number;
    addedBy: mongoose.Schema.Types.ObjectId;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
