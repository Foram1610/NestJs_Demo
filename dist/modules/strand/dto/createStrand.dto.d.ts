import mongoose from "mongoose";
export declare class CreateStrandDto {
    strandName: String;
    parentStrand?: mongoose.Schema.Types.ObjectId;
}
