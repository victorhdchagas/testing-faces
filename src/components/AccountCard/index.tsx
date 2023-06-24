import Image from "next/image";
import { Card, Button } from '@/components/flowbite'
import { AccountType } from "@/types/AccountType";

export function AccountCard({ Account }: { Account: AccountType }) {
    const { id, first_name, last_name, email, gender, avatar } = Account;
    const full_name = `${first_name} ${last_name}`
    return (
        // <div className={"flex flex-col gap-2  max-w-[200px]"}>
        <Card className="max-w-sm flex flex-col justify-around " theme={{root: {children:"flex h-full flex-col justify-between gap-2 p-6",base:"max-h-[400px] flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"}
}}>
            <Image src={avatar} width={500} height={500} className={"max-h-[100px] object-cover blur-sm"} alt={first_name} />
                <div className="flex flex-row justify-around w-full">
                <p  className="font-normal  text-gray-400  ">
                    {full_name}
                </p>
                <p  className="font-normal  text-gray-400  ">
                    {email}
                </p>

                </div>
            <Button href={`/accounts/${id}`}>
                <p>
                    Verificar compras
                </p>
            </Button>
        </Card >
    )
}