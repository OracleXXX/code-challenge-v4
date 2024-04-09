import {useState, useEffect} from 'react';
import {ChainRegistryClient} from '@chain-registry/client';
import {Random} from "@cosmjs/crypto";
import {getLogo, getRandomFloat, transformAssets} from "@/utils";
import {getChainByChainName, getChainGasPriceRanges} from "@chain-registry/utils";
import {useStore} from "@/store/store";
import {DEFAULT_CHAIN_NAME} from "@/constants/assets";

// interface Assets {
//     isOtherChains: boolean;
//     imgSrc: string;
//     symbol: string;
//     name: string;
//     tokenAmount: string;
//     tokenAmountPrice: string;
//     chainName: string;
//     onDeposit: () => void;
//     onWithdraw: () => void;
// }

export const useChainData = () => {
    const store = useStore();
    const selectChainName = store?.selectedChainName || '';
    useEffect(() => {
        if (selectChainName) {
            const fetchData = async () => {
                const client = new ChainRegistryClient({
                    chainNames: [selectChainName], // Assuming chainName is a valid Cosmos chain
                });

                await client.fetchUrls();
                const chain = client.getChain(selectChainName);
                const assetList = client.getChainAssetList(selectChainName);
                store.setAssetList(assetList.assets);
                store.setSelectedChain(chain);
                console.log("更新了------------")
                console.log(chain)
                console.log(assetList)
            };
            fetchData().catch(console.error);
        }

    }, [selectChainName]);

};
