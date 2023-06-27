import * as mongoose from "mongoose";
export type ScienceFairDocument = ScienceFair & Document;
export declare class ScienceFair {
    name: String;
    date: Date;
    location1: String;
    description: String;
    image: String;
    isLocked: Boolean;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const ScienceFairSchema: mongoose.Schema<ScienceFair, mongoose.Model<ScienceFair, any, any, any, mongoose.Document<unknown, any, ScienceFair> & Omit<ScienceFair & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ScienceFair, mongoose.Document<unknown, {}, mongoose.FlatRecord<ScienceFair>> & Omit<mongoose.FlatRecord<ScienceFair> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
