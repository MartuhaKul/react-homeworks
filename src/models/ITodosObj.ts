import {ITodo} from "./ITodo.ts";

export interface ITodosObj {
    todos: ITodo[];
    total: number;
    skip: number;
    limit: number;
}