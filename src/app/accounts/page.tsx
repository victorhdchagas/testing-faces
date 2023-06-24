import { AccountCard } from "@/components/AccountCard";
import { AccountType } from "@/types/AccountType";
import Link from "next/link";
import { PageParamsType } from "@/types/NextType";
import { AccountsAPI } from "@/api";
import Paginate from "@/components/paginate";


export default async function AccountPage({ searchParams }:PageParamsType) {
    const paginate = { page: 1, limit: 9,max:0 }
    paginate.page = searchParams._page ?parseInt(searchParams._page): paginate.page
    paginate.limit = searchParams._limit ?parseInt(searchParams._limit): paginate.limit
    const accounts = await AccountsAPI.getAccounts({_page:paginate.page.toString(), _limit:paginate.limit.toString()});
    paginate.max = parseInt(accounts.max);
    return (
        <main className={"py-4"}>
            <div className={'flex flex-row w-full flex-wrap justify-around basis-2/3 items-stretch gap-y-3'}>
                {accounts.data.map((account: AccountType) => (
                    <AccountCard key={account.id} Account={account} />
                ))}
            </div>
            <Paginate paginate={paginate}/>
        </main>
    )
}