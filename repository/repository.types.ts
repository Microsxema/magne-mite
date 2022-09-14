
export type GetPastLogsPayload = {
  addresses?: string[],
  fromBlockNumber: number,
  toBlockNumber: number | 'latest',
}

export type BlockchainRepositoryOptions = {
  getLogs: { stepRange: number },
}
