import { FreightType } from '.';

export class FreightSearchFilter{
    freightTypeFilters: string[];
    sourceCountry : string;
    destinationCountry : string;
    sortBy: string;
    sortDescending: boolean;
}