import { ITransaction } from '@interfaces';
import { TApiLatencies, TSortFunc } from '@types';

/**
 * @function TSortFunc
 * @param {ITransaction[]} transactions - list of the transactions for sort
 * @param {TApiLatencies} latenciesMap - Map of the defined latencies
 * @returns {ITransaction[]} sorting result :
 * Calculate in each transition coefficient and sort it
 */
export const generalCoefficient: TSortFunc = (
  transactions: ITransaction[],
  latenciesMap: TApiLatencies
) =>
  transactions
    .sort((transitionA: ITransaction, transitionB: ITransaction) => {
      const capacityA =
        transitionA.amount / latenciesMap[transitionA.bankCountryCode];
      const capacityB =
        transitionB.amount / latenciesMap[transitionB.bankCountryCode];
      return capacityB - capacityA;
    })
    .slice();
