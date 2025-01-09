import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";

export const routes = createBrowserRouter([
    {
        path:'/',element:<Layout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>}
        ]
    }
]);