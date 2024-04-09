import React from "react";
import {Avatar} from "@interchain-ui/react";
import {ChainOptionContainer} from "@/styles/addAssetStyle";

interface ChainOptionProps {
    iconUrl: string | '';
    label: string | '';
    value: string | '';
}


const ChainOption: React.FC<ChainOptionProps> = ({iconUrl, label, value}) => {
    return <ChainOptionContainer key={value} className="flex flex-ac flex-row">
        <Avatar name={label} getInitials={name => name[0]} size="sm" src={iconUrl}
                fallbackMode="bg" attributes={{
            paddingRight: "$4"
        }}/>
        <div className="flex flex-ajc">{label}</div>

    </ChainOptionContainer>;
};

export default ChainOption;
