import {ICartsResponseModel} from "../models/ICartsResponseModel.ts";

const baseURL = import.meta.env.VITE_BASE_URL;

export const  getCarts = async (id: string | undefined):Promise<ICartsResponseModel> => {
    return await  fetch(baseURL+ "carts/user/"+id)
        .then(res => res.json())
}