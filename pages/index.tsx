import {Box, Divider} from "@interchain-ui/react";
import {Layout} from "@/components";
import {AssetButton} from "@/styles/assetListStyle";
import {router} from "next/client";

export default function Home() {
    const handleClick = () => {
        router.push('/asset_list');
    }
    return (
        <Layout>
            {/*<Wallet />*/}
            <Box py="$16" className="flex flex-ajc">
                <AssetButton onClick={handleClick}>Asset List</AssetButton>

            </Box>
            <Divider mb="$16"/>
        </Layout>
    );
}
