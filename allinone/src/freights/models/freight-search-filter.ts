import { FreightType } from '.';

export class FreightSearchFilter{
    freightTypeFilters: FreightType[];
    sourceCountry : string;
    destinationCountry : string;
    sortBy: string;
    sortDescending: boolean;
}