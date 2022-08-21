import Bitcoin from "../assets/bitcoin";
import Binance from "../assets/binance";
import Solona from "../assets/solana";
import Shiba from "../assets/shiba";
import Ethereum from "../assets/ethereum";

const iconMapping = new Map<String,(props:any)=>JSX.Element>();
iconMapping.set("bitcoin",Bitcoin);
iconMapping.set("fantom",Binance);
iconMapping.set("solana",Solona);
iconMapping.set("arweave",Binance);
iconMapping.set("chainlink",Shiba);
iconMapping.set("uniswap",Shiba);
iconMapping.set("ethereum",Ethereum);
iconMapping.set("filecoin",Shiba);
iconMapping.set("aave",Solona);

export default iconMapping;