import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../../redux/slices/UserSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {IUser} from "../../../models/IUser.ts";

export const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [])
    return (
        <div>
            {users.map((user:IUser) => (<UserComponent key={user.id} item={user} />))}
        </div>
    );
};