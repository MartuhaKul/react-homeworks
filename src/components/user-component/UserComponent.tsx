import {IUser} from "../../model/IUser.ts";

interface UserProps {
    item: IUser,
}

export const UserComponent = ({item}:UserProps) => {
    return (
        <div>
            <h3>{item.id}. {item.firstName} {item.lastName}</h3>
        </div>
    );
};