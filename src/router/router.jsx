import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //     path: '',
        //     element: <Navigate to={'/'}></Navigate>
        // },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'/signUp',
            element:<Register></Register>
        }
      ]
    },
    {
      path: "*",
      element: <div>I am in the about page</div>
    }
  ])

export default router;