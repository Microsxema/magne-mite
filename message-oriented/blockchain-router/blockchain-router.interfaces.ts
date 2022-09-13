import {BlocksRange, Log} from "../../common/common.types";
import {TaskKey, TaskPriority} from "../../task-queue/task-queue.types";
import {NotificationResponse, TaskGetLogsResponse, TaskRequest} from "./blockchain-router.types";

/** -------------------------------------- Server Area -------------------------------------- */

export interface IRouterLogsFetcherServer {
  notifyEveryoneAboutNewLogs(logs: Log[]): Promise<void>;
}

export interface IRouterTaskExecutorServer {
  on(type: 'task-request', callback: (taskRequest: TaskRequest) => void): void;

  sendClientExecutedTaskGetLogs(clientName: string, task: TaskGetLogsResponse): Promise<void>;
}

/** -------------------------------------- Client Area -------------------------------------- */

export interface IRouterClient {
  readonly clientName: string;

  on(type: 'task-response', callback: (taskResponse: TaskGetLogsResponse) => void): void;
  on(type: 'subscription-response', callback: (notification: NotificationResponse) => void): void;

  sendTaskGetLogs(blocksRange: BlocksRange, addresses: string | string[], priority: TaskPriority): Promise<TaskKey>;
}
