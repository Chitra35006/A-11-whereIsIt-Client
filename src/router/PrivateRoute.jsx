import React, { useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading';

const PrivateRoute = ({children}) => {
    const{user,loading} = useAuth();
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;