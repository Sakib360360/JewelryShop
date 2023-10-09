import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import ErrorPage from './ErrorPage/ErrorPage'
import Home from './Home/Home';
import Register from './Login/Register';
import Login from './Login/Login';
import AllJwl from './AllJwl/AllJwl';
import PrivateRoutes from './PrivateRoutes';
import AddJwl from './AddJwl/AddJwl';
import MyJwl from './MyJwl/MyJwl';
import Blogs from './Blog/Blogs';


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Home></Home>
            },
            {
                path:'/register',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Register></Register>
            },
            {
                path:'/login',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Login></Login>
            },
            {
                path:'/allJwl',
                errorElement:<ErrorPage></ErrorPage>,
                element:<AllJwl></AllJwl>
            },
            {
                path:'/addJwl',
                errorElement:<ErrorPage></ErrorPage>,
                element:<PrivateRoutes><AddJwl></AddJwl></PrivateRoutes>
            },
            
            {
                path:'/myJwl',
                errorElement:<ErrorPage></ErrorPage>,
                element:<PrivateRoutes><MyJwl></MyJwl></PrivateRoutes>
            },
            {
                path:'/blogs',
                errorElement:<ErrorPage></ErrorPage>,
                element:<Blogs></Blogs>
            }

        ]
    }
])

export default Routes;