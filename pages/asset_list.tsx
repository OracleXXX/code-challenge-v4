import {Box, Divider} from "@interchain-ui/react";
import {Layout} from "@/components";
import ChainAssetList from "@/components/assets/ChainAssetList";
import {AssetButton} from '@/styles/assetListStyle';
import {useRouter} from 'next/router';



export default function AssetListPage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/add_asset'); // 跳转到关于页面
    };
    //useChainData(DEFAULT_CHAIN_NAME)
    return (
        <Layout>
            <Box py="$16" className="flex flex-col">
                <AssetButton onClick={handleClick}>Add Asset</AssetButton>
                <ChainAssetList chainName={'osmosis'}/>
            </Box>
            <Divider mb="$16"/>
        </Layout>
    );
}
