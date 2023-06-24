export type SellType = {
    id?: number;
    account_id: number;
    product_id: number;
    created_at: Date
}

export type SellDTOType = {
    id?: number;
    fullname: string;
    productname: string;
    account_id:number;
    product_id:number;
    created_at: string;
    price: number;
}
