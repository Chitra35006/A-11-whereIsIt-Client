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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/latestPost')
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
          path:'/allPostViewDetails/:id',
          element:<DetailsPage></DetailsPage>,
          loader:({params})=> fetch(`http://localhost:5000/addPost/${params.id}`)
        },
        {
          path:'/manageMyItems',
          element:<ManageMyItem></ManageMyItem>
        },
        {
          path:'/recoveredItems',
          element:<RecoveredItem></RecoveredItem>
        },
        {
          path:'/posting/:id',
          element:<UpdatePost></UpdatePost>,
          loader:({params}) => fetch(`http://localhost:5000/posting/${params.id}`)

        }
      ]
    },
    {
      path: "*",
      element: <Four04Page></Four04Page>
    }
  ])

export default router;