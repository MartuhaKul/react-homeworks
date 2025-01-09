import {IPost} from "./IPost.ts";

export interface IBaseResponseModelPosts{
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}
