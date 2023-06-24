import { SearchParamsType } from "@/types/NextType";
import { ProductType } from "@/types/ProductType";

type getProductsParamType = {
    id?: string;
    name?: string;
    image?: string;
    price?: string;
} &  SearchParamsType;
async function getProducts(params:getProductsParamType):Promise<{max:string;data:ProductType[]}>{
    const formatedParams = new URLSearchParams(params).toString()
    return await fetch(`http://localhost:8000/products?${Object.keys(params).length>0?formatedParams:""}`,{next:{tags:[`get-accounts`]}}).then(ret => ret.json().then(obj=>({max:ret.headers.get("x-total-count")??"0",data:obj})))
}

async function getProduct(id:string):Promise<ProductType>{
    return await fetch(`http://localhost:8000/products/${id}`).then(ret => ret.json())
}

export const ProductsAPI = {
    getProducts,
    getProduct

}