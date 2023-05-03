import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import RecipeLayout from "../Layout/recipeLayout";
import RecepiDetels from "../Pages/RecepiDetels/RecepiDetels";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>,

            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path:'recepis',
        element: <RecipeLayout></RecipeLayout>,
        children:[
            {
                path:'/recepis',
                element:<Home></Home>,
            },
            {
                path:':id',
                element: <RecepiDetels></RecepiDetels>
            }
        ]

    }
])

export default router