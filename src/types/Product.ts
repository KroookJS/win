import { ReactNode } from "react";

export type TItemProduct = {
        id: number;
        title: string;
        description?: string;
        price: number;
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

export type TChildren = {
    children: ReactNode;
};

export type TMarkup = {
    children: ReactNode;
    typePage?: boolean;
}