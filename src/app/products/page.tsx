import { PageParamsType } from "@/types/NextType";
import { ProductsAPI } from "@/api";
import Paginate from "@/components/paginate";
import { ProductCard } from "@/components/ProductCard";
import { ProductType } from "@/types/ProductType";
import { Button } from "@/components/flowbite";


export default async function AccountPage({ searchParams }: PageParamsType) {
    const paginate = { page: 1, limit: 9, max: 0 }
    paginate.page = searchParams._page ? parseInt(searchParams._page) : paginate.page
    paginate.limit = searchParams._limit ? parseInt(searchParams._limit) : paginate.limit
    const products = await ProductsAPI.getProducts({ _page: paginate.page.toString(), _limit: paginate.limit.toString() });
    paginate.max = parseInt(products.max);
    return (
        <main className={"py-4"}>
            <div className={'flex flex-row w-full flex-wrap justify-around basis-2/3 items-stretch gap-y-3'}>
                {products.data.map((product: ProductType) => (
                    <ProductCard key={product.id} Product={product} >
                        <Button href={`/products/${product.id}`}>
                            <p>
                                Verificar produto
                            </p>
                        </Button>
                    </ProductCard>
                ))}
            </div>
            <Paginate paginate={paginate} />
        </main>
    )
}