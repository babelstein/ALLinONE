import { FreightType } from './freightType';

export class Freight {
    Id : number;
    Name: string;
    Description: string;
    Type : FreightType;
    ValidTo: Date;
    UserId: number
}