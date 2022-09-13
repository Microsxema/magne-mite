
/**
 * Routers Exchange
 *
 * */
export const RouterTaskRequestExchange =  (network: string) => ({
  name: `${network}.Router.TaskRequestExchange`,
  type: 'direct',
  options: { durable: true },
});

export const RouterTaskResponseExchange = (network: string) => ({
  name: `${network}.Router.TaskResponseExchange`,
  type: 'direct',
  options: { durable: true },
});

export const RouterSubscriptionResponsesExchange = (network: string) => ({
  name: `${network}.Router.SubscriptionResponsesExchange`,
  type: 'fanout',
  options: { durable: true },
});
