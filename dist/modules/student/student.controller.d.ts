import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createUser(createUserDto: CreateStudentDto, req: any, res: any): Promise<any>;
    update(req: any, res: any, params: any): Promise<any>;
    delete(req: any, res: any, params: any): Promise<any>;
    getStudentById(res: any, params: any): Promise<any>;
    getAllStudent(req: any, res: any): Promise<any>;
    studentCSV(req: any, res: any, param: any): Promise<any>;
}
