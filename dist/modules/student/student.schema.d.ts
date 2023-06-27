import * as mongoose from "mongoose";
export type StudentDocument = Student & Document;
export declare class Student {
    firstName: String;
    lastName: String;
    scienceFairId: mongoose.Schema.Types.ObjectId;
    schoolId: mongoose.Schema.Types.ObjectId;
    grade: String;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const StudentSchema: mongoose.Schema<Student, mongoose.Model<Student, any, any, any, mongoose.Document<unknown, any, Student> & Omit<Student & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Student, mongoose.Document<unknown, {}, mongoose.FlatRecord<Student>> & Omit<mongoose.FlatRecord<Student> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
