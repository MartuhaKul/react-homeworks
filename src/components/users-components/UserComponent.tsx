import {IUser} from "../../models/IUser.ts";

interface UserProps {
    item:IUser,
}

export const UserComponent = ({item}:UserProps) => {
    return (
        <div>
            <h3>{item.id}.{item.firstName} {item.lastName}</h3>
            <p>{item.age} y.o.</p>
            <p>{item.email}</p>

        </div>
    );
};