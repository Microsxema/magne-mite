
export type Log = {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;

  removed: boolean;

  address: string;
  data: string;

  topics: string[];

  transactionHash: string;
  logIndex: number;
}

export type BlocksRange = {
  from: number, to: 'latest' | number,
}

export type BlocksRangeOnlyNumber = {
  from: number, to: number,
}
