
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

export interface EventData {
  returnValues: {
    [key: string]: any;
  };
  raw: {
    data: string;
    topics: string[];
  };
  event: string;
  signature: string;
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
  address: string;
}

export type BlocksRange = {
  from: number, to: 'latest' | number,
}

export type BlocksRangeOnlyNumber = {
  from: number, to: number,
}
