import {IBaseResponseModelUsers} from "../models/IBaseResponseModelUsers.ts";



const baseUrl=import.meta.env.VITE_BASE_URL;

export const getUsers=async (): Promise<IBaseResponseModelUsers> =>{
    return await fetch(baseUrl+"users")
        .then(value => value.json())
};