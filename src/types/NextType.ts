export type SearchParamsType = {
    _page?:string;
    _limit?:string;
}

export type ParamsType = {
    [key: string ]: string
}

export type PageParamsType = {
    params:ParamsType,
    searchParams: SearchParamsType
}