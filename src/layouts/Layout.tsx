import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu-components/Menu.tsx";

export const Layout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};