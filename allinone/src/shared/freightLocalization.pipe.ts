import { Pipe, PipeTransform } from '@angular/core';
import { ILocalization } from 'src/freights/models/ILocalization';

@Pipe({ name: 'freightLocalization' })

export class FreightLocalizationPipe implements PipeTransform {
    transform(value: ILocalization): string {
        return `<p>${value.country}</p>
        <p>${value.postCode}</p>
        <p>${value.addres1}</p>
        <p>${value.Addres2}</p>
        <p>${value.description}</p>
        `
    }
}