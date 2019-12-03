import { AuthService } from "src/services/auth.service";
import { SpecialPriceCalculator } from 'src/services/special-price-calculator';
import { StandardPriceCalculator } from 'src/services/standard-price-calculator';
import { IPriceCalculator } from './IPriceCalculator';

let priceCalculatorFactory = (authService: AuthService): IPriceCalculator => {
    if (authService.isAuthenticated) {
        return new SpecialPriceCalculator();
    }
    else {
        return new StandardPriceCalculator();
    }
};

export let priceCalculatorProvider =
{
    provide: IPriceCalculator,
    useFactory: priceCalculatorFactory,
    deps: [AuthService]
};