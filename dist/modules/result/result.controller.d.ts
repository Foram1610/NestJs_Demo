import { ResultService } from './result.service';
export declare class ResultController {
    private readonly resulService;
    constructor(resulService: ResultService);
    addResult(req: any, res: any): Promise<any>;
    getAllResult(req: any, res: any): Promise<any>;
    getResultById(req: any, res: any, param: any): Promise<any>;
    approveEvaluation(req: any, res: any, param: any): Promise<any>;
    getTopScore(req: any, res: any): Promise<any>;
    getAllScore(req: any, res: any): Promise<any>;
    rawResultCSV(req: any, res: any, param: any): Promise<any>;
    convertToCSV(req: any, res: any): Promise<any>;
    downloadFile(fileName: any, res: any): any;
}
