
export type GetPastLogsPayload = {
  addresses?: string[],
  toBlockNumber: number,
  fromBlockNumber: number | 'latest',
}

export type BlockchainRepositoryOptions = {
  getLogs: { stepRange: number },
}
