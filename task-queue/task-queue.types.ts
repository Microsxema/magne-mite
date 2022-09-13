import {Log, BlocksRange} from "../common/common.types";

export type TaskKey = string;

export type TaskPriority =
  | 1
  | 2
  | 3

export enum TaskTypes {
  GetLogs = 'GetLogs',
}

export enum TaskCompletionStatus {
  Error = -1,
  Completed = 0,
  InProgress = 1,
}

export type TaskExecutorOptions = {
  concurrency: number,
  intervalInMs: number,
}

export type AddTaskOptions = {
  priority: TaskPriority,
}

/**
 * Task "GetLogs"
 *
 * Input: GetLogsTaskPayload
 * Out: TaskGetLogsResult
 *
 * Options: GetLogsOptions
 */
export type GetLogsOptions = {
  /**
   * Get logs by step range.
   * (from, from + stepsRange)
   */
  stepsRange: number,
}

export type GetLogsTaskPayload = {
  blocksRange: BlocksRange,
  addresses: string | string[],
}

export type TaskGetLogsResult = {
  logs: Log[],
  maxBlockHeightViewed: number,
}

/**
 * Tasks Factory
 *
 * options: TaskFactoryOptions
 */
export type TaskFactoryOptions = {
  /**
   * For each task its own
   *    set of parameters
   */
  getLogsOptions: GetLogsOptions
}
