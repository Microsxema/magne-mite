import {Log} from "../common/common.types";

export interface ILogsFetcherWorker {
  on(type: 'logs', callback: (logs: Log[]) => void): void;

  startFetcher(): void;
}
