import * as mongoose from "mongoose";
export type StrandDocument = Strand & Document;
export declare class Strand {
    strandName: String;
    parentStrand: mongoose.Schema.Types.ObjectId;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const StrandSchema: mongoose.Schema<Strand, mongoose.Model<Strand, any, any, any, mongoose.Document<unknown, any, Strand> & Omit<Strand & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Strand, mongoose.Document<unknown, {}, mongoose.FlatRecord<Strand>> & Omit<mongoose.FlatRecord<Strand> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
