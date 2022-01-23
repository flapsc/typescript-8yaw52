import { ITransaction } from '@interfaces';
import { TSortFunc } from '@types';

export interface ISortingFuncVO {
  caption: string;
  func: TSortFunc;
  callback: (sorted: ITransaction[]) => void;
}
