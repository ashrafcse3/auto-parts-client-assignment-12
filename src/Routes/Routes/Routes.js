import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import AddACategory from "../../Pages/Dashboard/AddACategory/AddACategory";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import EachCategory from "../../Pages/EachCategory/EachCategory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/2',
                element: <EachCategory></EachCategory>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/addacategory',
                element: <AddACategory></AddACategory>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;