import { API_URL } from './index';
import axios from 'axios';



export async function UploadVideo (formData: any): Promise<string> {
    return (await axios.post(API_URL + `/upload`, formData)).data.url;
}

export async function UploadPrivVideo (videoUrl: string, time: string): Promise<any> {
    return (await axios.post(API_URL + `/generate`, {videoUrl, time})).data;
}
export async function UploadPrivRes (): Promise<string> {
    return (await axios.post(API_URL + `/gen`)).data.url;
}
