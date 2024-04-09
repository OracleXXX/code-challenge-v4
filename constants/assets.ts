import {Chain} from "@chain-registry/types";

export const DEFAULT_CHAIN: Chain = {
    chain_id: 'osmosis-1',
    network_type: 'mainnet',
    pretty_name: 'Osmosis',
    chain_name: 'osmosis',
    status: 'live',
    bech32_prefix: 'osmo',
    slip44: 118,
};
export const DEFAULT_CHAIN_NAME = 'osmosis';
export const DEFAULT_CHAIN_NAMES4 = ['osmosis', 'juno', 'stargaze']
export const DEFAULT_CHAIN_NAMES = [
    {
        name: 'osmosis',
        logo: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
    },
    {
        name: 'juno',
        logo: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
    },
    {
        name: 'stargaze',
        logo: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
    }
]
