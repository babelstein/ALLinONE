import { FreightType } from './freightType';
import { ILocalization } from './ILocalization';

export class Freight {
    id : number;
    name: string;
    description: string;
    type : FreightType;
    validTo: Date;
    userId: number;
    source: ILocalization;
    destination: ILocalization;
}