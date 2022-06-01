export const MSG_VESTING_TYPES = {
  MsgValue: [
    { name: 'from_address', type: 'string' },
    { name: 'to_address', type: 'string' },
    { name: 'start_time', type: 'string' },
    // { name: 'locked_periods', type: 'Period[]' },
    { name: 'vesting_periods', type: 'Period[]' },
    { name: 'merge', type: 'bool' },
  ],
  Period: [
    { name: 'length', type: 'string' },
    { name: 'amount', type: 'Coin[]' },
  ],
  // TypeAmount: [
  // 	{ name: 'denom', type: 'string' },
  // 	{ name: 'amount', type: 'string' }
  // ]
}

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
  return {
    type: 'evmos.vesting.v1.MsgCreateClawbackVestingAccount',
    value: {
      from_address: fromAddress,
      to_address: toAddress,
      start_time: startTime,
      // lockup_periods: [],
      vesting_periods: vestingPeriods,
      merge,
    },
  }
}
