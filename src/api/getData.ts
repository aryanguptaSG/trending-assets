import endPoints from "./endPoints";

export const getAllAssets = async()=>{
    const temp1 = await fetch(endPoints.getAllAssets);
    const temp2 = await temp1.json();
    return temp2;
}


