import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    login(data: LoginDto): Promise<any>;
    validateUser(id: any): Promise<any>;
}
