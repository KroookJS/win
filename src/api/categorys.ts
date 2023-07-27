import { IPost } from '@/types/Post';

import { ICategory, IModel } from '@/types/Catigories';
import { API_URL } from './index';
import axios from 'axios';



export async function getAllCategorys (): Promise<ICategory[]> {
    return (await axios.get(API_URL + `/category`)).data;
}
export async function getOneCategory (id: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/category/${id}`)).data;
}
export async function getOneCategoryByName (category: string): Promise<ICategory[]> {
    return (await axios.get(API_URL + `/find/category/${category}`)).data;
}

// Model
export async function getAllModel (): Promise<IModel[]> {
    return (await axios.get(API_URL + `/model`)).data;
}
export async function getOneModel (id: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/model/${id}`)).data;
}
export async function getOneModelByName (category: string): Promise<IModel[]> {
    return (await axios.get(API_URL + `/find/model/${category}`)).data;
}

