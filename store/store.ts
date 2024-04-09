import create from 'zustand';
import {Chain, AssetList, Asset} from '@chain-registry/types';
import {DEFAULT_CHAIN_NAME} from "@/constants/assets";

interface StoreState {
    selectedChainName: string | '';
    setSelectedChainName: (chainName: string) => void;

    selectedAsset: Asset | null;
    setSelectedAsset: (asset: Asset) => void;

    selectedChain: Chain | null;
    setSelectedChain: (chain: Chain) => void;

    assetList: Asset[] | [];
    setAssetList: (assets: any[]) => void; // Asset[]类型,但是会有红线,不影响运行

    myAssetList: Asset[] | [];
    addMyAssetList: (asset: Asset) => void;

    AssetDeposit: string | '';
    setAssetDeposit: (assetName: string) => void;

    AssetDepositFrom: Asset | null;
    setAssetDepositFrom: (asset: Asset) => void;
}

export const useStore = create<StoreState>((set) => ({
    selectedChainName: '',
    setSelectedChainName: (chainName) => set(() => ({selectedChainName: chainName})),
    selectedAsset: null,
    setSelectedAsset: (asset) => set(() => ({selectedAsset: asset})),
    selectedChain: null,
    setSelectedChain: (chain) => set(() => ({selectedChain: chain})),
    assetList: [],
    setAssetList: (assets) => set(() => ({assetList: assets})),

    myAssetList: [],
    addMyAssetList: (asset) => set((state) => ({myAssetList: [...state.myAssetList, asset]})),

    AssetDeposit: '',
    setAssetDeposit: (asset) => set(() => ({AssetDeposit: asset})),

    AssetDepositFrom: null,
    setAssetDepositFrom: (asset) => set(() => ({AssetDepositFrom: asset})),
    set
}));

//useStore.getState().setSelectedChain(DEFAULT_CHAIN);
