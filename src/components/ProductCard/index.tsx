import Image from "next/image";
import { Card, Button } from '@/components/flowbite'
import { ProductType } from "@/types/ProductType";
import { PropsWithChildren } from "react";

export function ProductCard({ Product,children }: PropsWithChildren<{ Product: ProductType }>) {
    const { id, name, image, price } = Product;
    return (
        <Card className="max-w-sm flex flex-col justify-around "
            theme={{
                root: {
                    children: "flex h-full flex-col justify-between gap-2 p-6", base: "max-h-[400px] flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
                }
            }}>
            <Image src={image} width={500} height={500} className={"max-h-[100px] object-cover "} alt={name} />
            <div className="flex flex-row justify-around w-full">
                <p className="font-normal  text-gray-400  ">
                    {name}
                </p>
                <p className="font-normal  text-gray-400  ">
                    {price}
                </p>
            </div>
            {children}
        </Card >
    )
}