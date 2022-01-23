import { ITransaction } from '@interfaces';
import { TApiLatencies, TSortFunc } from '@types';

/**
 * @function TSortFunc
 * @param {ITransaction[]} transactions - list of the transactions for sort
 * @param {TApiLatencies} latenciesMap - Map of the defined latencies
 * @returns {ITransaction[]} sorting result :
 * #1 Analyse all income @type {ITransaction[]} transactions and
 * define maximums for amountand latency
 * #2 Calculate in each transition coefficientes for latency and amount by formula
 * amountRatio(maxAmount / transition.amount)
 * latencyRatio(maxLatency/latenciesMap[transition.bankCountryCode])
 * and sort this 2 coefficientes
 */
export const separatedCoefficientes: TSortFunc = (
  transactions: ITransaction[],
  latenciesMap: TApiLatencies
): ITransaction[] => {
  const { maxAmount, maxLatency } = transactions.reduce<{
    maxAmount: number;
    maxLatency: number;
  }>(
    (
      previous: { maxAmount: number; maxLatency: number },
      current: ITransaction
    ) => {
      const currentLatency = latenciesMap[current.bankCountryCode];
      return {
        maxAmount:
          previous.maxAmount > current.amount
            ? previous.maxAmount
            : current.amount,
        maxLatency:
          previous.maxLatency > currentLatency
            ? previous.maxLatency
            : currentLatency,
      };
    },
    { maxAmount: 0, maxLatency: 0 }
  );

  return transactions
    .sort((transitionA: ITransaction, transitionB: ITransaction) => {
      const amountARatio = maxAmount / transitionA.amount;
      const amountBRatio = maxAmount / transitionB.amount;
      const latencyARatio =
        maxLatency / latenciesMap[transitionA.bankCountryCode];
      const latencyBRatio =
        maxLatency / latenciesMap[transitionB.bankCountryCode];
      const capacityA = amountARatio - latencyARatio;
      const capacityB = amountBRatio - latencyBRatio;
      return capacityA - capacityB;
    })
    .slice();
};
