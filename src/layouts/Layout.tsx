import {Outlet} from "react-router-dom";
import {Menu} from "../components/menu-component/Menu.tsx";

export const Layout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};