import { getAllAssets } from "../api/getData";
import iconMapping from '../utils/Icons';
import data from "./Data";

export const getData = async (setfinalData: Function) => {
  // getting data from api.
  const apiData = await getAllAssets();
  
  let tempData = apiData.map((item: any, id: Number) => {

    // getting default data for this slug .
    const temp = data.filter(d => d.slug===item.slug)[0];


    return {
      // spreading apidata here
      ...item,
      // getting the icon for this slug
      icon: iconMapping.get(item.slug),

      // using default data because it is not comming from api.
      price: temp.price,
      className:temp.className,
      percentChaneOfPrice: temp.percentChaneOfPrice,

      // generating array of icons of popular pairs using icon Mapping
      popularPairs: item.pairedAssetSlugs.map((slug: String, id: Number) => {
        return { icon: iconMapping.get(slug) }
      })
    }
  });

  setfinalData(tempData);
}