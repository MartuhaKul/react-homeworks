import {Link} from "react-router-dom";
import "./MenuStyle.css";

export const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/cars/create">Create Cars</Link></li>
            </ul>

        </div>
    );
};