import {Log} from "../../common/common.types";
import {
  TaskKey,
  TaskTypes,
  TaskPriority,
  TaskGetLogsResult,
  GetLogsTaskPayload,
} from "../../task-queue/task-queue.types";

/** -------------------------------------- Task Area -------------------------------------- */

export type TaskRequest = {
  taskKey: TaskKey,
  task: TaskTypes,
  payload: any,
  clientName: string,
  priority: TaskPriority,
}

export type TaskResponse = {
  taskKey: TaskKey,
  task: TaskTypes.GetLogs,
  result: any,
}

/**
 * Task "GetLogs"
 * Input: TaskGetLogsRequest
 * Output: TaskGetLogsResponse
 */
export type TaskGetLogsRequest = TaskRequest & {
  task: TaskTypes.GetLogs,
  payload: GetLogsTaskPayload,
}

export type TaskGetLogsResponse = TaskResponse & {
  task: TaskTypes.GetLogs,
  result: TaskGetLogsResult,
}

/** ---------------------------------- Notification Area ---------------------------------- */

export enum SubscriptionTypes {
  NewLogs = 'NewLogs',
  TaskExecutorServerStarted = 'TaskExecutorServerStarted',
}

export type NotificationResponse = {
  subscription: SubscriptionTypes,
  data: any,
}

/**
 * Notification "NewLogs"
 * Output: NotificationNewLogsResponse
 */
export type NotificationNewLogsResponse = NotificationResponse & {
  subscription: SubscriptionTypes.NewLogs,
  data: { logs: Log[] },
}
