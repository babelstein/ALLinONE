import { PriceCalculator, IPriceCalculator } from 'src/shared';
export class SpecialPriceCalculator extends PriceCalculator implements IPriceCalculator{
    CalculcatePrice(basePrice: number): number {
        const distancePrice : number = 1.25;
        return super.NumberRound(basePrice * distancePrice,2); 
    }
}