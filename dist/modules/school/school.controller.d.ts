import { CreateSchoolDto } from './dto/createSchool.dto';
import { SchoolService } from './school.service';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    createSchool(createSchoolDto: CreateSchoolDto, res: any): Promise<any>;
    update(req: any, res: any, params: any): Promise<any>;
    delete(res: any, params: any): Promise<any>;
    getSchoolById(res: any, params: any): Promise<any>;
    getAllSchool(req: any, res: any): Promise<any>;
}
