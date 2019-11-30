import { Pipe, PipeTransform } from '@angular/core';
import { FreightType } from 'src/freights/Models/freightType';

@Pipe({ name: 'freightType' })

export class FreightTypePipe implements PipeTransform {
    transform(value: FreightType): string {
        switch (value) {
            case (FreightType.Cooler):
                return 'Cooler'
                break;
            case (FreightType.Curtainsider):
                return 'Curtainsider';
            case (FreightType.DumpTruck):
                return 'Dump truck';
            case (FreightType.Isotherm):
                return 'Isotherm';
            case (FreightType.WalkingFloor):
                return 'Walking floor';
            default: FreightType[value].toString();
        }
    }

}