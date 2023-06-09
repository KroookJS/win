import { IPost } from '@/types/Post';

import { ICategory } from '@/types/Catigories';
import { API_URL } from './index';
import axios from 'axios';



export async function getAllCategorys (): Promise<ICategory[]> {
    return (await axios.get(API_URL + `/category`)).data;
}
export async function getOneCategory (id: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/category/${id}`)).data;
}
/* export async function getOneCategoryByName (category: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/find/${category}`)).data;
} */
export async function getOneCategoryByName (category: string): Promise<ICategory[]> {
    return (await axios.get(API_URL + `/find/category/${category}`)).data;
}

