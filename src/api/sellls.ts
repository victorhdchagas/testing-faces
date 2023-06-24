import { SellType } from "@/types/SellType"

type getSellsParamType = {
    id?: string;
    account_id?: string;
    product_id?: string;
    created_at?: string;
}
async function getSellsByParams(param:getSellsParamType):Promise<SellType[]>{
    const formatedParams = new URLSearchParams(param).toString()
    return await fetch(`http://localhost:8000/sells?${formatedParams}`).then(ret => ret.json())
}

export const SellsAPI = {
    getSellsByParams,

}