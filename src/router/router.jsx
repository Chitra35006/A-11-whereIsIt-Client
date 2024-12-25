import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import AddLostFoundItem from "../pages/AddLostFoundItem/AddLostFoundItem";
import LostFoundAllItem from "../pages/Lost&FoundPage/LostFoundAllItem";
import ManageMyItem from "../pages/ManageMyItem/ManageMyItem";
import RecoveredItem from "../pages/RecoveredItemPage/RecoveredItem";

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
        },
        {
          path:'/addAItems',
          element:<AddLostFoundItem></AddLostFoundItem>
        },
        {
          path:'/allItems',
          element:<LostFoundAllItem></LostFoundAllItem>
        },
        {
          path:'/manageMyItems',
          element:<ManageMyItem></ManageMyItem>
        },
        {
          path:'/recoveredItems',
          element:<RecoveredItem></RecoveredItem>
        }
      ]
    },
    {
      path: "*",
      element: <div>I am in the about page</div>
    }
  ])

export default router;