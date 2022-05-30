import * as vesting from '../proto/evmos/vesting/v1/tx'

export function createMsgVesting(
  fromAddress: string,
  toAddress: string,
  startTime: string,
  // lockupPeriods?: {
  // 	length: string
  // 	amount: { denom: string; amount: string }[]
  // }[],

  vestingPeriods?: {
    length: string
    amount: { denom: string; amount: string }[]
  }[],
  merge: boolean = false,
) {
  const message = new vesting.evmos.vesting.v1.MsgCreateClawbackVestingAccount([
    {
      from_address: fromAddress,
      to_address: toAddress,
      start_time: startTime,
      // lockupPeriods,
      vesting_periods: vestingPeriods,
      merge,
    },
  ])

  return {
    message,
    path: 'evmos.vesting.v1.MsgCreateClawbackVestingAccount',
  }
}
