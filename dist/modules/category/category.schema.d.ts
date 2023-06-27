import * as mongoose from "mongoose";
export type CategoryDocument = Category & Document;
export declare class Category {
    name: String;
    description: String;
    isActive: Boolean;
    isDeleted: Boolean;
}
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Omit<Category & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & Omit<mongoose.FlatRecord<Category> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
