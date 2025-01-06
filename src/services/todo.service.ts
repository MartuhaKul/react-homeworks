import {ITodo} from "../models/ITodo.ts";

export const baseUrl = import.meta.env.VITE_API_URL;
export const getTodos= async ():Promise<ITodo[]>=>{
   return  await fetch(baseUrl)
        .then(value => value.json())
}