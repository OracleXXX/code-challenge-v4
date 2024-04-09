import {AssetWithdrawTokens, BasicModal, Stack} from "@interchain-ui/react";
import {useStore} from "@/store/store";
import {getAsset, getMyFirstAsset} from "@/utils";

export default function Deposit() {
    const store = useStore();
    let DepositTo = getAsset(store.AssetDeposit)
    let DepositFrom = getMyFirstAsset()
    return <Stack space="$10">
        <BasicModal
            onClose={function Va() {
                store.setAssetDeposit('')
            }}
            renderTrigger={function Va() {
            }}
            title="Deposit"
            isOpen={store.AssetDeposit !== ''}>
            <AssetWithdrawTokens
                amount="12"
                available={parseFloat(DepositFrom?.tokenAmount)}
                fromAddress={DepositFrom.name}
                fromImgSrc={DepositFrom.imgSrc}
                fromName={DepositFrom.name}
                fromSymbol={DepositFrom.symbol}
                onAddressChange={function Va(value) {
                    store.setAssetDeposit(value)
                }}
                onAddressConfirm={function Va() {
                    DepositTo = getAsset(store.AssetDeposit)
                }}
                onCancel={function Va() {
                }}
                onChange={function Va() {
                }}
                onTransfer={function Va() {
                   // transfer amount from DepositFrom to Deposit TO
                    alert("deposit success")
                }}
                priceDisplayAmount={0.5}
                timeEstimateLabel="20 seconds"
                toAddress={DepositTo.name}
                toImgSrc={DepositTo.imgSrc}
                toName={DepositTo.name}
            />
        </BasicModal>
    </Stack>
}
