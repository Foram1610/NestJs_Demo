import { CreateScienceFairDto } from './dto/createScienceFair.dto';
import { ScienceFairService } from './science-fair.service';
export declare class ScienceFairController {
    private readonly scienceFairService;
    constructor(scienceFairService: ScienceFairService);
    createUser(createScienceFairDto: CreateScienceFairDto, file: any, res: any): Promise<any>;
    update(req: any, res: any, file: any, params: any): Promise<any>;
    delete(res: any, params: any): Promise<any>;
    getScienceFairById(res: any, params: any): Promise<any>;
    getAllScienceFair(req: any, res: any): Promise<any>;
    lockScienceFair(res: any, params: any): Promise<any>;
    getTotalCount(req: any, res: any, params: any): Promise<any>;
    getAllScienceFairPublic(req: any, res: any): Promise<any>;
}
