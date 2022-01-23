import { ITransaction } from '@interfaces';

export interface IPrioritizeResult {
  totalUSD: number;
  transactionRes: ITransaction[];
  totalTime: number;
}
