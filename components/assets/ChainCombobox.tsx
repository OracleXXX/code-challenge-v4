import {Avatar, Box, Skeleton} from "@interchain-ui/react";
import {Combobox} from '@interchain-ui/react';
import React, {useEffect} from "react";
import {transformAssets} from "@/utils";
import {useStore} from "@/store/store";
import ChainOption from "@/components/assets/ChainOption";
import { DEFAULT_CHAIN_NAMES} from "@/constants/assets";
import {AddAssetButton} from "@/styles/addAssetStyle";
import {Asset} from "@chain-registry/types";
import {useChainData} from "@/hooks/useChainData";


export default function ChainCombobox() {
    useChainData();

    const store = useStore();
    // Chain 业务逻辑
    const [selectedChain, setSelectedChain] = React.useState<React.Key>();
    const chainOptions = DEFAULT_CHAIN_NAMES;
    const chainLogoUrl = chainOptions.find(i => i.name === selectedChain)?.logo ?? undefined;
    const handleChainNameChange = (chainName: string) => {
        if (!chainName) {
            return
        }
       store.setSelectedChainName(chainName);

    };

    // asset 业务逻辑
    const [selectedAsset, setSelectedAsset] = React.useState<React.Key>();
    const assetOptions = transformAssets(useStore((state) => state.assetList));
    const assetLogoUrl = assetOptions.find(i => i.symbol === selectedAsset)?.imgSrc ?? undefined;

    const handleSelectedAssetChange = (item: string) => {

        if (!item) {
            // popup window for errors
            return
        }
        const asset = assetOptions.find(i => i.symbol === item) ?? undefined

        if (!asset) {
            // popup window for errors
            return
        }

        const newAsset: Asset = {
            base: asset.base,
            denom_units: asset.denom_units,
            name: asset.name,
            display: asset.display,
            symbol: asset.symbol,
            logo_URIs: {png: asset.imgSrc}
        }
        store.setSelectedAsset(newAsset)

    };
    const handleAddAsset = () => {
        const selectedAsset = store?.selectedAsset;
        // 空值就直接返回
        if (!selectedAsset) {
            return
        }
        const myAssetList = store.myAssetList;
        // 已经添加过的就不需要添加
        if (myAssetList.find(i => i.symbol === selectedAsset?.symbol)) {
            return
        }
        store.addMyAssetList(selectedAsset);

    }
    return <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="end" gap="$6">
        {/*select Chain button*/}
        <Combobox label="Select Chain"
                  size="md"
                  onSelectionChange={item => {
                      setSelectedChain(item ?? null);
                      handleChainNameChange(item as string)
                  }}
                  inputAddonStart={selectedChain && chainLogoUrl ?
                      <Avatar name={(selectedChain as string)} getInitials={name => name[0]} size="sm"
                              src={chainLogoUrl}
                              fallbackMode="bg" attributes={{
                          paddingX: "$4"
                      }}/> : selectedChain ?
                          <Box display="flex" justifyContent="center" alignItems="center" px="$4">
                              <Skeleton width="24px" height="24px" borderRadius="$full"/>
                          </Box> : null}
                  styleProps={{width: "350px"}}
        >
            {chainOptions.map(option => <Combobox.Item key={option.name} textValue={option.name}>
                <ChainOption iconUrl={option.logo} label={option.name} value={option.name}/>
            </Combobox.Item>)}
        </Combobox>
        {/*select Asset button*/}
        <Combobox
            label="Select Asset"
            size="md"
            onSelectionChange={item => {
                setSelectedAsset(item ?? null);
                handleSelectedAssetChange(item as string)
            }}
            inputAddonStart={selectedAsset && assetLogoUrl ?
                <Avatar name={(selectedAsset as string)} getInitials={name => name[0]} size="sm" src={assetLogoUrl}
                        fallbackMode="bg" attributes={{
                    paddingX: "$4"
                }}/> : selectedAsset ?
                    <Box display="flex" justifyContent="center" alignItems="center" px="$4">
                        <Skeleton width="24px" height="24px" borderRadius="$full"/>
                    </Box> : null}
            styleProps={{width: "350px"}}
        >
            {assetOptions.map(option => <Combobox.Item key={option.symbol} textValue={option.name}>

                <ChainOption iconUrl={option.imgSrc} label={option.name} value={option.name}/>

            </Combobox.Item>)}
        </Combobox>
        <AddAssetButton onClick={handleAddAsset}>Click To Add</AddAssetButton>
    </Box>;

}
