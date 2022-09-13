import {
  RouterTaskRequestExchange,
  RouterTaskResponseExchange,
  RouterSubscriptionResponsesExchange,
} from "./blockchain-router.exchanges";

/**
 * Router Server Queues
 *
 *
 */
export const RouterServerTaskRequestsQueue = (network: string) => ({
  name: `${network}.Router.Server.TaskRequests`,
  boundExchange: RouterTaskRequestExchange(network),
  options: { durable: true, exclusive: true, messageTtl: 5000 },
});

/**
 * Router Client Queues
 *
 *
 */
export const RouterClientTaskResponsesQueue = (network: string, clientName: string) => ({
  name: `${network}.Router.Client.${clientName}.TaskResponses`,
  boundExchange: RouterTaskResponseExchange(network),
  options: { durable: true, exclusive: false },
});

export const RouterClientSubscriptionResponsesQueue = (network: string, clientName: string) => ({
  name: `${network}.Router.Client.${clientName}.SubscriptionResponses`,
  boundExchange: RouterSubscriptionResponsesExchange(network),
  options: { durable: false, exclusive: false, autoDelete: true, messageTtl: 10000 },
});
