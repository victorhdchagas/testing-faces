import { AccountType } from "@/types/AccountType";
import { PageParamsType, SearchParamsType } from "@/types/NextType";


type getAccountsParamType = {
    id?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    gender?: string;
    avatar?: string
} &  SearchParamsType;
async function getAccount(id:string) :Promise<AccountType>{
    return await fetch(`http://localhost:8000/accounts/${id}`,{next:{tags:[`get-account-${id}`]}}).then(ret => ret.json())
}
async function getAccounts(params:getAccountsParamType) :Promise<{max:string,data:AccountType[]}>{
    const formatedParams = new URLSearchParams(params).toString()
    return await fetch(`http://localhost:8000/accounts?${Object.keys(params).length>0?formatedParams:""}`,{next:{tags:[`get-accounts`]}}).then(ret => ret.json().then(obj=>({max:ret.headers.get("x-total-count")??"0",data:obj})))
}

export const AccountsAPI = {
    getAccounts,
    getAccount

}