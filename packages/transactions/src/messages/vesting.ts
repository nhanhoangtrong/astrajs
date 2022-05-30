import { createMsgVesting as protoMsgVesting, createTransaction } from 'proto'

import {
  createEIP712,
  generateFee,
  generateMessage,
  generateTypes,
  createMsgVesting,
  MSG_VESTING_TYPES,
} from 'eip712'

import { Chain, Fee, Sender } from './common'

export interface VestingSendParams {
  destinationAddress: string
  startTime: string
  amount: string
  denom: string
  // lockupPeriods?: []
  vestingPeriod: {
    length: string
    amount: { denom: string; amount: string }[]
  }[]
}

export function createMessageVesting(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: VestingSendParams,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_VESTING_TYPES)
  const msg = createMsgVesting(
    sender.accountAddress,
    params.destinationAddress,
    params.startTime,
    // params.lockupPeriods,
    params.vestingPeriod,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoMsgVesting(
    sender.accountAddress,
    params.destinationAddress,
    params.startTime,
    // params.lockupPeriods,
    params.vestingPeriod,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

// eslint-disable-next-line jest/require-hook
// createMessageVesting(
//   {
//     chainId: 11112,
//     cosmosChainId: 'astra_11112-1',
//   },
//   {
//     accountAddress: 'astra1cu4pyzgpy7m7q2n4gspkk02cwtvm4ttv47cqd9',
//     sequence: 0,
//     accountNumber: 9,
//     pubkey: '',
//   },
//   {
//     amount: '20',
//     denom: 'aevmos',
//     gas: '200000',
//   },
//   '',
//   {
//     amount: '0',
//     denom: '',
//     destinationAddress: 'astra1cu4pyzgpy7m7q2n4gspkk02cwtvm4ttv47cqd9',
//     startTime: '',
//   },
// )
