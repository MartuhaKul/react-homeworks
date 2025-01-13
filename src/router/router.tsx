import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {UsersPage} from "../pages/users-pages/UsersPage.tsx";
import {CartsPage} from "../pages/users-carts-pages/CartsPage.tsx";

export const routers = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'users/:id/carts', element:<CartsPage/>}

        ]}
])