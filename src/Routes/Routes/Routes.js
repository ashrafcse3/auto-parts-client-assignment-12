import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import AddACategory from "../../Pages/Dashboard/AddACategory/AddACategory";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllCategories from "../../Pages/Dashboard/AllCategories/AllCategories";
import UpdateCategory from "../../Pages/Dashboard/AllCategories/UpdateCategory";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import DashboardPage from "../../Pages/Dashboard/DashboardPage/DashboardPage";
import EachCategory from "../../Pages/EachCategory/EachCategory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog/Blog";
import UserBookings from "../../Pages/Dashboard/UserBookings/UserBookings";

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
                path: '/category/:id',
                element: <EachCategory></EachCategory>,
                loader: ({ params }) => fetch(`http://localhost:4000/productbycategory/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardPage></DashboardPage></PrivateRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addacategory',
                element: <AddACategory></AddACategory>
            },
            {
                path: '/dashboard/allcategories',
                element: <AllCategories></AllCategories>
            },
            {
                path: '/dashboard/updatecategory/:id',
                element: <UpdateCategory></UpdateCategory>,
                loader: ({ params }) => fetch(`http://localhost:4000/categories/${params.id}`)
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/userbookings',
                element: <UserBookings />
            }

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;