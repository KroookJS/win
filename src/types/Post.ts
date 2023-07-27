import { ICategory } from "./Catigories";

export interface IPost {
    _id: string;
    title: string;
    text: string;
    category: string[];
    model?: string[];
    tags: string[];
    viewsCount: number;
    user: string;
    videoUrl: string;
    privUrl: string;
    privVideoUrl?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    userAvatar?: string;
    userName? : string;
}

export interface IPostFile {
    title: string;
    text: string;
    tags?: string;
    category: string;
    videoUrl: string;
    
    privUrl: string;
}