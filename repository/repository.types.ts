
export type GetPastLogsPayload = {
  addresses?: string[],
  toBlockNumber: number,
  fromBlockNumber: number | 'latest',
}
