import React from "react";

interface Props {
  price: String,
  percentChaneOfPrice?: Number
}

const ValueCard: React.FC<Props> = ({
  price,
  percentChaneOfPrice = null
}) => {
  return (
    <div className="flex items-center justify-center text-text-white text-base font-normal bg-valueCard py-2 rounded-full relative icon-border">
      <div>
        {price}
        {percentChaneOfPrice !== null &&
          <div className={`${percentChaneOfPrice >= 0 ? "text-text-green" : "text-text-red"} absolute right-3  top-3 text-small`}>
            {percentChaneOfPrice > 0 ? "+" : null}{`${percentChaneOfPrice} %`}
          </div>}
      </div>
    </div>
  )
}

export default ValueCard
