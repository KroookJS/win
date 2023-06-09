import { TCategories } from '@/types/Catigories';
import { API_URL } from './index';
import axios from 'axios';



export async function UploadVideo (formData: any): Promise<string> {
    return (await axios.post(API_URL + `/upload`, formData)).data;
}
