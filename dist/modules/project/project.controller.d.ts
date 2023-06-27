import { CreateProjectDto } from './dto/createProject.dto';
import { ProjectService } from './project.service';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectDto: CreateProjectDto, req: any, res: any): Promise<any>;
    update(req: any, res: any, params: any): Promise<any>;
    delete(res: any, params: any): Promise<any>;
    getProjectById(res: any, params: any): Promise<any>;
    getAllProject(req: any, res: any): Promise<any>;
    projectCSV(req: any, res: any, params: any): Promise<any>;
}
