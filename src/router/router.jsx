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
import UpdatePost from "../pages/UpdatePost/UpdatePost";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Four04Page from "../pages/Shared/Four04Page";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://a-11-where-is-it-server.vercel.app/latestPost')
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
          element:<PrivateRoute><AddLostFoundItem></AddLostFoundItem></PrivateRoute>
        },
        {
          path:'/allItems',
          element:<LostFoundAllItem></LostFoundAllItem>
        },
        {
          path:'/allPostViewDetails/:id',
          element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
          loader:({params})=> fetch(`https://a-11-where-is-it-server.vercel.app/addPost/${params.id}`)
        },
        {
          path:'/manageMyItems',
          element:<PrivateRoute><ManageMyItem></ManageMyItem></PrivateRoute>
        },
        {
          path:'/recoveredItems',
          element:<PrivateRoute><RecoveredItem></RecoveredItem></PrivateRoute>
        },
        {
          path:'/posting/:id',
          element:<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
          loader:({params}) => fetch(`https://a-11-where-is-it-server.vercel.app/posting/${params.id}`)

        }
      ]
    },
    {
      path: "*",
      element: <Four04Page></Four04Page>
    }
  ])

export default router;