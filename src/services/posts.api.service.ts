import {IBaseResponseModelPosts} from "../models/IBaseResponseModelPosts.ts";

const baseUrl=import.meta.env.VITE_BASE_URL;

export const getPosts=async (): Promise<IBaseResponseModelPosts>=>{
    return await fetch(baseUrl+'posts')
        .then(value => value.json())
};