export type TItemProduct = {
        id?: number;
        title: string;
        description?: string;
        price?: number;
        discountPercentage?: number;
        rating?: number;
        brand?: string;
        category?: string;
        thumbnail?: string
}
export type TProducts = {
    products : TItemProduct[];
    total: number;
    skip: number;
    limit: number;
}

export type IQueryParams = {
    offset: string
    firs: string
    boiler: string
    parts: string
    priceFrom: string
    priceTo: string
}

export type TItemCategory = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]
}

export type TCategories = {
    products: TItemCategory[]
}

export type TItemSlider = {
    id: number;
    title: string;
    image: string
}