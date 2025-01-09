import {useEffect, useState} from "react";
import {IUser} from "../../../models/IUser.ts";
import {getUsers} from "../../../services/users.api.service.ts";
import {UserComponent} from "../User/UserComponent.tsx";

export const UsersComponents = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then(({users})=>{
                setUsers(users)
            });
    },[]);

    return (
        <>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </>
    );
};