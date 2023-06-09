import { IPost, IPostFile } from '../types/Post';
import { API_URL } from './index';
import axios from 'axios';

export async function getAllProducts (): Promise<IPost[]> {
    return (await axios.get(API_URL + `/posts`)).data;
}
export const getAll = async (): Promise<IPost[]> => {
    return (await axios.get(API_URL + '/posts')).data;
};
export const getOneProduct = async (id: string): Promise<IPost> => {
    return (await axios.get(API_URL + `/posts/${id}`)).data;
};
export const addPost = async (file: any): Promise<IPost> => {
    return (await axios.get(API_URL + `/posts`, file)).data;
};

export async function getFavorite (id:string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/posts?favorite=${id}`)).data;
}