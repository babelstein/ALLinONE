import { AuthService } from "src/services/auth.service";
import { PriceCalculator } from './price-calculator';
import { SpecialPriceCalculator } from './special-price-calculator';
import { StandardPriceCalculator } from './standard-price-calculator';

export let priceCalculatorFactory = (authService: AuthService): PriceCalculator => {
    debugger;
    if (authService.isAuthenticated) {
        return new SpecialPriceCalculator();
    }
    else {
        return new StandardPriceCalculator();
    }
};