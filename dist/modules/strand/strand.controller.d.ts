import { CreateStrandDto } from './dto/createStrand.dto';
import { StrandService } from './strand.service';
export declare class StrandController {
    private readonly strandService;
    constructor(strandService: StrandService);
    createCategory(createStrandDto: CreateStrandDto, res: any): Promise<any>;
    update(req: any, res: any, params: any): Promise<any>;
    delete(res: any, params: any): Promise<any>;
    getStrandById(res: any, params: any): Promise<any>;
    getAllStrand(req: any, res: any): Promise<any>;
}
