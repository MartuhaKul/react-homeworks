import {Link} from "react-router-dom";
import "./menu.css";

export const Menu = () => {
    return (
        <div className='menu text-3xl'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>
        </div>
    );
};