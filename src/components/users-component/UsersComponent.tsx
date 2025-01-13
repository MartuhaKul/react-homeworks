import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/users.api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

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