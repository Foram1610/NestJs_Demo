import { Model } from 'mongoose';
import { Category } from '../modules/category/category.schema';
import { Seeder } from 'nestjs-seeder';
export declare class CategorySeederService implements Seeder {
    private readonly categoryModel;
    constructor(categoryModel: Model<Category>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
