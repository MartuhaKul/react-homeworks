import {ITodosObj} from "../models/ITodosObj.ts";

export const baseUrl = import.meta.env.VITE_API_URL;

export const getTodos= async ():Promise<ITodosObj>=>{
   return  await fetch(baseUrl)
        .then(value => value.json())
}