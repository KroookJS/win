import { TCategories } from '@/types/Product';
import { API_URL } from './index';
import axios from 'axios';



export async function getAllCategorys (): Promise<string[]> {
    return (await axios.get(API_URL + `/products/categories`)).data;
}
export async function getOneCategory (categoty: string): Promise<TCategories> {
    return (await axios.get(API_URL + `/products/category/${categoty}`)).data;
}

