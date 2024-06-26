import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {LoginForm} from "./Components/LoginForm.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import BlogPostsPage from "./pages/BlogPostsPage.jsx";
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path :'users',
                element:<UsersPage/>,
            },
            {
                path:'blog-posts',
                element:<BlogPostsPage/>
            }


        ]},
    {
        path:'/Login',
        element: <LoginForm/>
    }



])
ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
