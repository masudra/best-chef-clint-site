import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import RecipeLayout from "../Layout/recipeLayout";
import RecepiDetels from "../Pages/RecepiDetels/RecepiDetels";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import PrivatRoute from "./PrivatRoute";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path:':Id',
                element:<PrivatRoute><RecepiDetels></RecepiDetels></PrivatRoute>,
                loader:async({params})=> {
                    const res =await fetch(`https://best-chef-server-side-masudra.vercel.app/recipi`)
                    const data =await res.json()
                    const recipisss =data.find(recipi=>recipi.id==params.Id)
                    return recipisss
            }
        }
        ]

    }
])

export default router