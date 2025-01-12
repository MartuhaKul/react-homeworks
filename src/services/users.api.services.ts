import {IUserResponseModel} from "../models/IUserResponseModel.ts";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getUsers = async (): Promise<IUserResponseModel> => {
    return await fetch(baseURL+"users")
    .then(value => value.json())
}