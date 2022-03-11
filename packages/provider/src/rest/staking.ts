import { Coin } from './coin'

/* eslint-disable camelcase */
export interface Reward {
  validator_address: string
  reward: Coin[]
}
export interface DistributionRewardsResponse {
  rewards: Reward[]
  total: Coin[]
}

export function generateEndpointDistributionRewardsByAddress(address: string) {
  return `/cosmos/distribution/v1beta1/delegators/${address}/rewards`
}