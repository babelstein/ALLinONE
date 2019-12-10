import { PriceCalculator } from './price-calculator';

export class SpecialPriceCalculator extends PriceCalculator {
    CalculcatePrice(basePrice: number): number {
        const distancePrice: number = 1.25;
        return this.NumberRound(basePrice * distancePrice, 2);
    }

    NumberRound(value, digits): number {
        let tenToN = 10 ** digits;
        return (Math.round(value * tenToN) / tenToN);
    }
}