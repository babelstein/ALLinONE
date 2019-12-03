import { PriceCalculator, IPriceCalculator } from 'src/shared';

export class StandardPriceCalculator extends PriceCalculator implements IPriceCalculator{
    CalculcatePrice(basePrice: number): number {
        const distancePrice : number = 4.5;

        return super.NumberRound(basePrice * distancePrice,2); 
    }
}