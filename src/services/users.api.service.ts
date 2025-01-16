import {IUsersResponseModel} from "../model/IUsersResponseModel.ts";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getUsers = async (page: string):Promise<IUsersResponseModel>=>{
    const limit= 30;
    const skip = limit * (+page)-limit;
    return await fetch(baseURL+"users"+"?skip="+skip)
    .then(value => value.json())}