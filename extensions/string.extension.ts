import { DigitsAfterTheDecimalPointForDollar } from 'constants';

String.prototype.toDollarsFromCents = function (this: string): string {
  return this.slice(
    0,
    this.length - DigitsAfterTheDecimalPointForDollar
  ).concat('.', this.slice(this.length - DigitsAfterTheDecimalPointForDollar));
};
