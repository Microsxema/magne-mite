
export interface IHashRepository {
  on(type: 'close', callback: () => void): void;
  on(type: 'error', callback: (error) => void): void;

  isExists(key: string): Promise<boolean>;

  get(key: string): Promise<[[field: string, value: string]]>;

  set(key: string, fieldAndValue: [[field: string, value: string]]): Promise<void>;
}

/**
 * Is a repository of the form:
 *    key - list value.
 * Example:
 *    key1 - [value1, value2];
 *    key2 - [value1, value2, value3];
 *    key3 - [];
 */
export interface IKeyListRepository<TPayload> {
  on(type: 'close', callback: () => void): void;
  on(type: 'error', callback: (error) => void): void;

  /**
   * List methods.
   */
  removeList(key: string | string[]): Promise<void>;
  push(key: string, ...payload: TPayload[]): Promise<number>;

  /**
   * Getters for list values.
   * start and stop points - is number position in list.
   */
  getListValues(key: string, start: number, stop: number): Promise<TPayload[]>;

  /**
   * Getters for list keys
   */
  getListKeys(): Promise<string[]>;
  getListKeysCount(): Promise<number>;
}

/**
 * Is a repository of the form:
 *    key:index - list value.
 * Example:
 *    key1:10 - [value1, value2];
 *    key2:11 - [value1, value2, value3];
 *    key3:12 - [];
 *
 * Where index - weighted index, with which you can
 *    take values and merge them into one list.
 *
 * Values can be merged by position and by score.
 * By score - min index, max index.
 * By position - start by position, stop by position like array/list.
 * Same with keys.
 */
export interface IWeightedKeysListsRepository<TPayload> extends IKeyListRepository<TPayload> {
  on(type: 'close', callback: () => void): void;
  on(type: 'error', callback: (error) => void): void;

  removeListsByScore(min: number, max: number): Promise<void>;
  removeListsByPosition(start: number, stop: number): Promise<void>;

  /**
   * Getters of merged lists values.
   */
  getMergedValuesOfListsByScore(min: number, max: number): Promise<TPayload[]>;

  /**
   * Getters lists keys.
   */
  getKeysOfListsByScore(min: number, max: number): Promise<string[]>;
  getKeysOfListsByPosition(start: number, stop: number): Promise<string[]>;
}
