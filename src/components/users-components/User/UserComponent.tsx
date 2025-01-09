import {IUser} from "../../../models/IUser.ts";

interface UserProps {
    item:IUser,
}

export const UserComponent = ({item}:UserProps) => {
    return (
        <div>
            <h3>{item.username}</h3>

        </div>
    );
};