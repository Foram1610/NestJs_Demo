import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryDto: CreateCategoryDto, res: any): Promise<any>;
    update(req: any, res: any, params: any): Promise<any>;
    delete(res: any, params: any): Promise<any>;
    getCategoryById(res: any, params: any): Promise<any>;
    getAllCategory(req: any, res: any): Promise<any>;
}
