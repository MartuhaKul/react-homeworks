import {useEffect, useState} from "react";
import {IUser} from "../../model/IUser.ts";
import {getUsers} from "../../services/users.api.service.ts";
import {IUsersResponseModel} from "../../model/IUsersResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();

    useEffect(() => {
        let page = query.get('page');


        if (!page) {
            page = "1";
        }

        getUsers(page)
            .then(({users}: IUsersResponseModel) => {
                setUsers(users);
            });
    }, [query]);

    return (
        <>
            {users.map(value => (<UserComponent key={value.id} item={value}/>))}
        </>
    );
};
