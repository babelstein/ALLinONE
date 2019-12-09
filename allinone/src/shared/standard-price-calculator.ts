import { PriceCalculator } from './price-calculator';

export class StandardPriceCalculator extends PriceCalculator{
    CalculcatePrice(basePrice: number): number {
        const distancePrice : number = 4.5;
        return this.NumberRound(basePrice * distancePrice,2); 
    }

    NumberRound(value, digits): number {
        let tenToN = 10 ** digits;
        return (Math.round(value * tenToN) / tenToN);
    }
}