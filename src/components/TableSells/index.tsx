import { SellDTOType } from "@/types/SellType";
import { TableBody, Table, TableHead, TableCell, TableRow, TableHeadCell, Badge } from "@/components/flowbite";

export default function TableSells({ Sells }: { Sells: SellDTOType[] }) {
    return (
        <Table hoverable>
            <TableHead>
                <TableHeadCell>
                    #
                </TableHeadCell>
                <TableHeadCell>
                    Client
                </TableHeadCell>
                <TableHeadCell>
                    Product
                </TableHeadCell>
                <TableHeadCell>
                    Date
                </TableHeadCell>
                <TableHeadCell>
                    price
                </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
                {Sells.map(sell => (

                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={sell.id}>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {sell.id}
                        </TableCell>
                        <TableCell>
                            <Badge href={`/accounts/${sell.account_id}`} size={"sm"}>
                                {sell.fullname}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            <Badge href={`/products/${sell.product_id}`} size={"sm"}>
                                {sell.productname}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            {sell.created_at}
                        </TableCell>
                        <TableCell>
                            ${sell.price.toFixed(2)}
                        </TableCell>
                        
                    </TableRow>
                ))}
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-950">
                    <TableCell colSpan={2}>
                        <Badge size={"sm"} theme={{ root: { base: "text-center font-bold" } }}>
                            Items: {Sells.length}
                        </Badge>
                    </TableCell>
                    <TableCell colSpan={2}>
                    </TableCell>
                    <TableCell colSpan={1}>
                        <Badge size={"sm"} theme={{ root: { base: "text-center font-bold" } }}>
                            Total: ${Sells.length>0?Sells.reduce((oldSell, sell) => ({ ...oldSell, price: sell.price + oldSell.price })).price.toFixed(2):0}
                        </Badge>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )

}