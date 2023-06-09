import { ICategory, IModel } from '@/types/Catigories';
import { API_URL } from './index';
import axios from 'axios';



export async function getAllModels (): Promise<IModel[]> {
    return (await axios.get(API_URL + `/model`)).data;
}
export async function getOneModel (id: string): Promise<ICategory> {
    return (await axios.get(API_URL + `/model/${id}`)).data;
}

