import {chains} from 'chain-registry';
import {Asset, Chain} from '@chain-registry/types';
import {useStore} from "@/store/store";
import {util} from "protobufjs";
import float = util.float;
import {AssetDenomUnit} from "@chain-registry/types/types/assets";

export function getLogo(from: Asset | Chain) {
    return from.logo_URIs?.svg || from.logo_URIs?.png || from.logo_URIs?.jpeg;
}

export function getChainLogo(name: string) {
    const chain = chains.find(chain => chain.chain_name === name)
    return chain ? getLogo(chain) : null;
}

// 生成随机浮点数
export function getRandomFloat(min: number, max: number, fix: number): number {
    let randomFloat = Math.random() * (max - min) + min;
    return parseFloat(randomFloat.toFixed(fix));
}

// 匹配assets数据
export function transformAssets(fetchedAssets: Asset[]) {
    const topTenAssets = fetchedAssets.slice(0, 10);
    return topTenAssets.map(asset => ({
        imgSrc: getLogo(asset) || '',
        symbol: asset?.symbol ?? '',
        name: asset?.name ?? '',
        tokenAmount: getRandomFloat(0, 100, 2).toString(),
        tokenAmountPrice: getRandomFloat(0, 10, 2).toString(),
        base: asset.base,
        denom_units: asset.denom_units,
        display: asset.display,
        address: asset.address,
        onDeposit: () => {
            useStore.getState().setAssetDeposit(asset?.name);

        }, // 已是符合类型的函数
        onWithdraw: () => {
        }, // 已是符合类型的函数
    }));
}

// AssetList匹配到AddAsset中的option中
export function transformAssetListToAddListOptions(assetList: Asset[]) {

    return assetList.slice(0, 10).map(asset => ({
        iconUrl: getLogo(asset) || '',
        value: asset?.symbol, //未来这里需要校验是否唯一
        label: asset?.name || '',
    }));
}

export function getAsset(name: string) {
    const assetDeposit = {
        imgSrc: '',
        symbol: '',
        name: '',
        tokenAmount: '',
        tokenAmountPrice: '',
        base: '',
        denom_units: {},
        display: '',
        address: '',
    };
    if (!name) {
        return assetDeposit;
    }
    transformAssets(useStore.getState().myAssetList).map(x => {
        if (x.name === name) {
            assetDeposit.imgSrc = x.imgSrc
            assetDeposit.symbol = x.symbol
            assetDeposit.name = x.name
            assetDeposit.tokenAmount = x.tokenAmount
            assetDeposit.tokenAmountPrice = x.tokenAmountPrice
            assetDeposit.base = x.base
            assetDeposit.denom_units = x.denom_units
            assetDeposit.display = x.display
            assetDeposit.address = x?.address || ''
        }
    });
    return assetDeposit;
}

export function getMyFirstAsset() {
    const myAssets = useStore.getState().myAssetList;
    if( myAssets.length === 0) {
        return getAsset('')
    }
    return getAsset(myAssets[0].name)
}



