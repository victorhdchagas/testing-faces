import { AccountCard } from "@/components/AccountCard";
import { AccountType } from "@/types/AccountType";
import { ProductType } from "@/types/ProductType";
import { SellDTOType, SellType } from "@/types/SellType";
// import TableSells from "./components/TableSells";
import {  PageParamsType } from "@/types/NextType";
import { AccountsAPI, ProductsAPI } from "@/api";
import { SellsAPI } from "@/api/sellls";
import { ProductCard } from "@/components/ProductCard";
import TableSells from "@/components/TableSells";


export default async function AccountPage({params}:PageParamsType) {
    const {product_id} = params;
    
    const product = await ProductsAPI.getProduct(product_id);
    const accountSells = await SellsAPI.getSellsByParams({product_id});
    const accounts = await AccountsAPI.getAccounts({});
    const accountTransactions = accountSells.sort((a,b)=>a.created_at<b.created_at?1:-1).map(sell=>{
        const account = accounts.data.find(account=>account.id==sell.account_id);
        return { 
            id:sell.id,
            fullname: `${account?.first_name} ${account?.last_name}`,
            created_at:new Date(sell.created_at).toLocaleString(),
            product_id:sell.product_id,
            account_id:sell.account_id,
            productname: product?.name,
            price: parseFloat(product?.price.substring(1)!)
        }as SellDTOType
    })
    return (
        <main className={"py-4"}>
            <div className={'flex flex-row w-full flex-wrap justify-around items-stretch gap-y-3'}>
                <ProductCard Product={product} />
                <TableSells Sells={accountTransactions}/>

            </div>
        </main>
    )
}