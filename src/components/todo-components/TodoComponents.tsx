import {ITodo} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {getTodos} from "../../services/todo.service.ts";


export const TodoComponents = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos()
            .then(({todos}) => {
                setTodos(todos);
            });

    }, []);
    return (
        <>
            {
                todos.map(value => <TodoComponent key = {value.id} item = {value}/>)
            }
        </>
    );
};