import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import "./UserComponentCss.css"

interface UserProps {
    item: IUser,
}

export const UserComponent = ({item}:UserProps) => {

    const navigate = useNavigate();

    const onButtonClick = ()=>{
        navigate('/users/'+item.id+'/carts', {state:item});
    }

    return (
        <div className='userContainer'>
            <h3>{item.id}. {item.firstName} {item.lastName}</h3>
            <button className='buttonDetails' onClick={onButtonClick}>Details</button>
        </div>
    );
};