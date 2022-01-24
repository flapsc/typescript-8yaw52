export namespace global {
  export const DolarToCent = (dollarAmount: number) => dollarAmount * 100;
  const DigitsAfterTheDecimalPointForDollar = 2;
  String.prototype.toDollarsFromCents = function (this: string): number {
    return Number(
      this.slice(0, this.length - DigitsAfterTheDecimalPointForDollar).concat(
        '.',
        this.slice(this.length - DigitsAfterTheDecimalPointForDollar)
      )
    );
  };
}
