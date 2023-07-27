import { IPost } from '../types/Post';
import { API_URL } from './index';
import axios from 'axios';

export async function getAllProducts (page?: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/posts?page=${page}`)).data;
}
export async function getAllPostsUser (id: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/posts?profile=${id}`)).data;
}
export const getAll = async (): Promise<IPost[]> => {
    return (await axios.get(API_URL + '/posts')).data;
};
export const getTopViews = async (): Promise<IPost[]> => {
    return (await axios.get(API_URL + '/top')).data;
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
export async function getFavoriteTimout (id:string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/posts?favorite=${id}`, { timeout: 500 })).data;
}



export async function searchPost (search: string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/search/${search}`,))
}