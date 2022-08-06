import React from "react";
import ValueCard from "./ValueCard";
import PopularPairs from "./PopularPairs";
import { Asset } from "../utils/Data";

interface Props {
    asset: Asset
}

const AssetCard: React.FC<Props> = ({ asset }) => {
    return (
        <div className="min-w-[290px] min-h-[400px]">
            <div className="relative">
                <div className="flex items-center justify-center absolute z-10 left-[85px] top-0 min-w-[110px] min-h-[110px] bg-background-black bottom-rounded-border">
                    <div className={`flex items-center justify-center min-w-[90px] min-h-[90px] rounded-full backdrop-blur-card icon-border ${asset.className}`}>
                        <div className="min-w-[50px] min-h-[50px]"><asset.icon /></div>
                    </div>
                </div>
            </div>


            <div className="min-w-[290px] min-h-[350px] mt-[50px] bg-card rounded-xl backdrop-blur-card card-border pt-[70px] text-center px-5">
                <div className="text-text-gray font-normal text-base">
                    {asset.name}
                </div>

                <div className="mt-3 space-y-1">
                    <ValueCard price={asset.price} percentChaneOfPrice={asset.percentChaneOfPrice} />
                    <div className="text-text-gray font-normal text-base">Price</div>
                </div>

                <div className="mt-3 space-y-1">
                    <ValueCard price={asset.tvl} />
                    <div className="text-text-gray font-normal text-base">TVL</div>
                </div>

                <div className="mt-3 space-y-1">
                    <PopularPairs pairs={asset.popularPairs} />
                    <div className="text-text-gray font-normal text-base">Popular pairs</div>
                </div>

            </div>
        </div>
    )
}

export default AssetCard
