import Bitcoin from "../assets/bitcoin";
import Binance from "../assets/binance";
import Solona from "../assets/solana";
import Shiba from "../assets/shiba";
import Ethereum from "../assets/ethereum";


export interface Icon{
    icon:(props:any)=>JSX.Element
}

export interface Asset{
    slug:String,
    name: String,
    price: String,
    percentChaneOfPrice: Number,
    tvl: String,
    popularPairs: Icon[],
    icon: (props:any)=>JSX.Element,
    className:String
}

const data:Asset[] = [
    {
        slug:"bitcoin",
        name: "Bitcoin (BTC)",
        price: "31,812.80",
        percentChaneOfPrice: +10,
        tvl: "60,000",
        popularPairs: [{ icon: Solona }, { icon: Ethereum }, { icon: Binance }],
        icon: Bitcoin,
        className:"bg-bitcoin"
    },
    {
        slug:"filecoin",
        name: "Solana (SOL)",
        price: "32.83",
        percentChaneOfPrice: -12.32,
        tvl: "60,000",
        popularPairs: [{ icon: Bitcoin }, { icon: Ethereum }, { icon: Binance }],
        icon: Solona,
        className:"bg-solona"
    },
    { 
        slug:"ethereum",
        name: "Ethereum (ETH)",
        price: "1,466.45",
        percentChaneOfPrice: -11.93,
        tvl: "60,000",
        popularPairs: [{ icon: Solona }, { icon: Bitcoin }, { icon: Binance }],
        icon: Ethereum,
        className:"bg-ethereum"
    },
    { 
        slug:"aave",
        name: "Binance USD (BUSD)",
        price: "1.00",
        percentChaneOfPrice: +0.26,
        tvl: "60,000",
        popularPairs: [{ icon: Solona }, { icon: Ethereum }, { icon: Binance }],
        icon: Binance,
        className:"bg-binance"
    },
    { 
        slug:"",
        name: "Shiba Inu (SHIB)",
        price: "0.00000001948",
        percentChaneOfPrice: -8.1,
        tvl: "60,000",
        popularPairs: [{ icon: Solona }, { icon: Ethereum }, { icon: Binance }],
        icon: Shiba,
        className:"bg-shiba"
    },
]

export default data;
