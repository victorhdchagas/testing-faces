import { AccountCard } from "@/components/AccountCard";
import { SellDTOType, SellType } from "@/types/SellType";
import TableSells from "@/components/TableSells";
import {  PageParamsType } from "@/types/NextType";
import { AccountsAPI, ProductsAPI } from "@/api";
import { SellsAPI } from "@/api/sellls";


export default async function AccountPage({params}:PageParamsType) {
    const {account_id} = params;
    const account = await AccountsAPI.getAccount(account_id);
    const accountSells = await SellsAPI.getSellsByParams({account_id});
    const products = await ProductsAPI.getProducts({});
    const accountTransactions = accountSells.sort((a,b)=>a.created_at<b.created_at?1:-1).map(sell=>{
        const product = products.data.find(prod=>prod.id==sell.product_id);
        return { 
            id:sell.id,
            fullname: `${account.first_name} ${account.last_name}`,
            account_id: account.id,
            created_at:new Date(sell.created_at).toLocaleString(),
            product_id:sell.product_id,
            productname: product?.name,
            price: parseFloat(product?.price.substring(1)!)
        }as SellDTOType
    })
    return (
        <main className={"py-4"}>
            <div className={'flex flex-row w-full flex-wrap justify-around items-stretch gap-y-3'}>
                <AccountCard Account={account} />
                <TableSells Sells={accountTransactions}/>
            </div>
        </main>
    )
}