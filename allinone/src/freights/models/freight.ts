import { FreightType } from './freightType';
import { ILocalization } from './ILocalization';

export class Freight {
    Id : number;
    Name: string;
    Description: string;
    Type : FreightType;
    ValidTo: Date;
    UserId: number;
    Source: ILocalization;
    Destination: ILocalization;
}