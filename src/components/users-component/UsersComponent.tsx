import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/users.api.services.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
        .then(({users}:IUserResponseModel) => setUsers(users));

    },[]);
    return (
        <>
            {users.map(value => (<UserComponent key={value.id} item={value} />))}
        </>
    );
};