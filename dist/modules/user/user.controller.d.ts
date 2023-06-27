import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto, file: any, req: any, res: any): Promise<any>;
    update(req: any, res: any, file: any, params: any): Promise<any>;
    delete(req: any, res: any, params: any): Promise<any>;
    getUserById(res: any, params: any): Promise<any>;
    getAllUser(req: any, res: any): Promise<any>;
    userCSV(req: any, res: any, param: any): Promise<any>;
}
