import {useCallback, useEffect, useMemo, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    console.log('users component')

    const arr:number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);
    // хук юзмемо не робить зайвий рендер при обчисленнях коли нічого не змінюється

    const foo = useCallback(()=>{
        console.log('foo')
    },[]);
    // тут ми використовуємо хук юзколбек для того щоб наша функція не рірендила компонент

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(value => value.json())
        .then(users => {
            setUsers(users)});

    },[]);

    return (
        <div>
            <p>UsersComponent</p>
            <UserComponent foo={foo} arr={arr}/>
            //передаємо функцію фуу
        </div>
    );
};