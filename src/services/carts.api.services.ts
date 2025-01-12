import {IUserResponseModel} from "../models/IUserResponseModel.ts";

const baseURL = import.meta.env.VITE_BASE_URL;

export const  getCarts = async (id: string | undefined):Promise<IUserResponseModel[]> => {
    return await  fetch(baseURL+ "carts/user/"+id)
        .then(res => res.json())
}