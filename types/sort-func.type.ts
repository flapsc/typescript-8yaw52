import { ITransaction } from '@interfaces';
import { TApiLatencies } from '@types';

export type TSortFunc = (
  transaction: ITransaction[],
  latenciesMap: TApiLatencies
) => ITransaction[];
