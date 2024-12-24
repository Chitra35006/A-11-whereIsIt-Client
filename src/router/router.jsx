import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

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
      ]
    },
    {
      path: "*",
      element: <div>I am in the about page</div>
    }
  ])

export default router;