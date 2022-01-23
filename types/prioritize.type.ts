import { ITransaction } from '@interfaces';
import { TApiLatencies } from '@types';

/**
 * @type {Function} TPrioritize, this Function should return a subset (or full array
 * that will maximize the USD value and fit the transactions under totalTime
 */
export type TPrioritize = (
  transactions: ITransaction[],
  totalTime: number,
  latenciesMap: TApiLatencies
) => ITransaction[];
