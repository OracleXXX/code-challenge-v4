import {Box, Divider} from "@interchain-ui/react";
import {Layout} from "@/components";
import React from "react";
import {AssetButton} from '@/styles/assetListStyle'
import {useRouter} from "next/router";
import ChainCombobox from "@/components/assets/ChainCombobox";
import ChainAssetList from "@/components/assets/ChainAssetList";
import Deposit from "@/components/assets/Deposit";

export default function AddAssetPage() {
    const router = useRouter();
    const handleToAssetList = () => {
        router.push('/asset_list'); // 跳转到关于页面
    };

    return (
        <Layout>
            <Box py="$16" display="flex" flexDirection="column" gap="$6">
                <div className="flex flex-ac flex-bt w1">

                    <AssetButton onClick={handleToAssetList}>Return To Asset List</AssetButton>
                </div>
                <ChainCombobox/>


            </Box>
            <ChainAssetList chainName=''/>
            <Divider mb="$16"/>
            <Deposit/>
        </Layout>
    );
}
