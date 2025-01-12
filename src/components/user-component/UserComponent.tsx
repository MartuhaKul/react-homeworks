import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

interface UserProps {
    item: IUser,
}

export const UserComponent = ({item}:UserProps) => {

    const navigate = useNavigate();

    const onButtonClick = ()=>{
        navigate('/users/'+item.id+'/carts', {state:item});
    }

    return (
        <div>
            <h3>{item.firstName} {item.lastName}</h3>
            <button onClick={onButtonClick}>Details</button>
        </div>
    );
};