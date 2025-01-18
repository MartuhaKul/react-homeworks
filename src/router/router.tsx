import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CarsPage} from "../pages/cars/CarsPage.tsx";
import {CreateCarsPage} from "../pages/create-cars/CreateCarsPage.tsx";

export const router = createBrowserRouter([
    {path: '/', element:<MainLayout/>, children:[
            {path: 'cars', element:<CarsPage/>},
            {path: 'cars/create', element:<CreateCarsPage/>}
        ]}
]);