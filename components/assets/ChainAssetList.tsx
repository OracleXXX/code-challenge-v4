import React from 'react';
import {AssetList} from '@interchain-ui/react';
import {transformAssets} from "@/utils";
import {useStore} from "@/store/store"; // 导入AssetList组件

interface ChainAssetListProps {
    chainName: string;
}



const ChainAssetList: React.FC<ChainAssetListProps> = ({chainName}) => {
    const assetList = transformAssets(useStore((state) => state.myAssetList));
    return <AssetList
        isOtherChains={false}
        list={assetList}
        needChainSpace
        titles={['Asset', 'Balance']}
    />;
};

export default ChainAssetList;
