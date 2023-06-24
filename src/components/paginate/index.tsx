import { Badge } from "@/components/flowbite";
import Link from "next/link";

export default function Paginate({ paginate }: { paginate: { page: number, max: number,limit:number } }, className: string = "w-1/3 mx-auto text-stone-300 flex flex-row justify-between items-center") {
    const maxPage = Math.floor(paginate.max/paginate.limit)+1
    const links = new Array(maxPage).fill(false)
    links[paginate.page-1] = true
    return (
        <div className={className}>
            <Link href={"?_page=" + (paginate.page==1?1:paginate.page - 1)} >Voltar</Link>
            <div className={"flex flex-row w-full gap-x-2 mx-5"}>
                {links.map((link, index) => (
                    <Badge key={index} color={link ? "info" : "dark"} href={`?_page=${index+1}`}>{index+1}</Badge>
                ))}
            </div>
            <Link href={"?_page=" + (paginate.page ==maxPage?maxPage:paginate.page + 1)}>Avançar</Link>
        </div>
    )
}