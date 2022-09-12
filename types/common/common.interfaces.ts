
export interface ISubscribeAsyncChannel {
  on(type: 'close', callback: () => void);
  on(type: 'error', callback: (error) => void);
}
