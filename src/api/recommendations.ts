import { IPost } from "@/types/Post";
import { API_URL } from ".";
import axios from "axios";

export const getRecommendation = async (): Promise<IPost[]> => {
    return (await axios.get(API_URL + `/random`)).data;
};

export const getRecommendationByCategory = async (category: string): Promise<IPost[]> => {
    return (await axios.get(API_URL + `/find/random/${category}`)).data;
};