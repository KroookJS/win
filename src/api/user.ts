import axios from "axios";
import { API_URL } from ".";
import { IPost } from "@/types/Post";
import { IUser } from "./dto/auth.dto";

export const getAllUsers = async (): Promise<IUser[]> => {
    return (await axios.get(API_URL + `/users`)).data;
};
export const getUserByid = async (id: string): Promise<IUser> => {
    return (await axios.get(API_URL + `/user/${id}`)).data;
};

export async function getPostsUserProfile (id:string): Promise<IPost[]> {
    return (await axios.get(API_URL + `/posts?favorite=${id}`)).data;
}