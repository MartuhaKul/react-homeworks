import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";

export const routes = createBrowserRouter([
    {
        path:'',element:<Layout/>
    }
]);