import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import * as vesting from '../proto/evmos/vesting/v1/tx'
import * as coin from '../proto/cosmos/base/v1beta1/coin'
import * as cosmosVesting from '../proto/cosmos/vesting/v1beta1/vesting'

export function createMsgVesting(
  fromAddress: string,
  toAddress: string,
  startTime: string,
  // lockupPeriods?: {
  // 	length: string
  // 	amount: { denom: string; amount: string }[]
  // }[],

  vestingPeriods: {
    length: string
    amount: { denom: string; amount: string }[]
  }[],
  merge: boolean = false,
) {
  const vestingPeriodsData = vestingPeriods.map(
    (v) =>
      new cosmosVesting.cosmos.vesting.v1beta1.Period({
        length: parseInt(v.length, 10),
        amount: [
          new coin.cosmos.base.v1beta1.Coin({
            denom: v.amount[0].denom,
            amount: v.amount[0].amount,
          }),
        ],
      }),
  )

  const message = new vesting.evmos.vesting.v1.MsgCreateClawbackVestingAccount([
    {
      from_address: fromAddress,
      to_address: toAddress,
      start_time: Timestamp.fromDate(new Date(startTime)),
      // lockupPeriods: undefined,
      vesting_periods: vestingPeriodsData,
      merge,
    },
  ])
  return {
    message,
    path: 'evmos.vesting.v1.MsgCreateClawbackVestingAccount',
  }
}
