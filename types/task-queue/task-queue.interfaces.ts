import {
  TaskKey,
  TaskTypes,
  AddTaskOptions,
  GetLogsTaskPayload,
  TaskCompletionStatus,
} from "./task-queue.types"

export interface ITask {
  readonly taskKey: TaskKey;

  getExecutionResult(): any;
  getStatus(): TaskCompletionStatus;
  execute(): Promise<TaskCompletionStatus>;
}

export interface ITaskFactory {
  create(type: TaskTypes.GetLogs, taskKey: TaskKey, payload: GetLogsTaskPayload): Promise<ITask>;
}

export interface ITaskExecutor {
  on(type: 'completed-tasks', callback: (tasks: ITask[]) => void): void;

  addTask(task: ITask, options: AddTaskOptions): void;

  startExecute();
}
