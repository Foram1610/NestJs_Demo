import { Model } from 'mongoose';
import { User } from '../modules/user/user.schema';
import { Seeder } from 'nestjs-seeder';
export declare class UserSeederService implements Seeder {
    private readonly userModel;
    constructor(userModel: Model<User>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
