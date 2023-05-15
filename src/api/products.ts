import { TProducts } from '../types/Product';
import { API_URL } from './index';
import axios from 'axios';

export async function getAllProducts (limit: string, page: string): Promise<TProducts> {
    return (await axios.get(API_URL + `/products?limit=${limit}&skip=${page}`)).data;
}
export const getAll = async (): Promise<TProducts> => {
    return (await axios.get(API_URL + '/products')).data;
  };
