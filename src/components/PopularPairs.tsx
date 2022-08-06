import React from "react";
import { Icon } from "../utils/Data";

interface Props{
    pairs:Icon[]
}

const PopularPairs:React.FC<Props> = ({pairs}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center text-text-white text-base font-normal bg-valueCard py-2 rounded-full relative w-fit px-3">
                <div className="flex justify-center items-center space-x-2">
                    {pairs.map((item: Icon, id: number) => {
                        return (
                            <item.icon key={id} w={22} h={22} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PopularPairs
