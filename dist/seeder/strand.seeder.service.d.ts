import { Model } from 'mongoose';
import { Strand } from '../modules/strand/strand.schema';
import { Seeder } from 'nestjs-seeder';
export declare class StrandSeederService implements Seeder {
    private readonly strandModel;
    constructor(strandModel: Model<Strand>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
