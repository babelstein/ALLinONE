export class PriceCalculator{
    NumberRound(value, digits) : number {
        var tenToN = 10 ** digits;
        return (Math.round(value * tenToN)) / tenToN;
    }
}