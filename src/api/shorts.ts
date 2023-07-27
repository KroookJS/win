import { IShorts } from '@/types/Shorts';
import { API_URL } from './index';
import axios from 'axios';

export async function getAllShorts (): Promise<IShorts[]> {
    return (await axios.get(API_URL + `/shorts`)).data;
}