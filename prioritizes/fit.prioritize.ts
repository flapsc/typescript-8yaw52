import { ITransaction } from '@interfaces';
import { TApiLatencies } from '@types';
import { TPrioritize } from 'types/prioritize.type';

// Fitting a sorted list of transactions to the total time
export const prioritize: TPrioritize = (
  transactions: ITransaction[],
  totalTime: number,
  latenciesMap: TApiLatencies
) =>
  transactions.reduce<ITransaction[]>(
    (accumulated: ITransaction[], currentValue: ITransaction) => {
      const latency = latenciesMap[currentValue.bankCountryCode];
      if (totalTime >= latency) {
        totalTime -= latency;
        accumulated.push(currentValue);
        return accumulated;
      }
    },
    []
  );
