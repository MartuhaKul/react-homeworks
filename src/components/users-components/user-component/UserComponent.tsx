import {IUser} from "../../../models/IUser.ts";

interface IUserProps {
    item: IUser;
}

export const UserComponent = ({item}:IUserProps) => {
    return (
        <div>
            {item.id} {item.name}
        </div>
    );
};