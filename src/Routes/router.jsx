import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetail from "../components/NewsDetail";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout />,
        children:[
            {
                path:'',
                element:<Navigate to={"category/01"}></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews/>,
                loader: ({params})=> 
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news/:id',
        element:(
            <PrivateRoutes>
                <NewsDetail />
            </PrivateRoutes>
        ),
        loader: ({params})=>
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'/auth',
        element:<AuthLayouts />,
        children: [
            {
                path:'/auth/login',
                element: <Login />
            },
            {
                path:'/auth/register',
                element: <Register />
            },

        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    },
])


export default router;