export interface ICategory {
    _id: string;
    category: string;
    imageCategoryUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export interface IModel {
    _id: string;
    model: string;
    imageModelUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
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