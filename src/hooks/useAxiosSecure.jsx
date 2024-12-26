import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://a-11-where-is-it-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const {logOut} = useAuth();

    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error =>{
            console.log('Error caught in interceptor',error);
            if(error.status === 401 || error.status === 403){
                console.log('need to log out the user');
                logOut()
                .then(()=>{
                    console.log('Logged Out User');
                    navigate('/signIn')
                })
            }
            return Promise.reject(error);
        }
    
    )
    },[])

    return axiosInstance;
};

export default useAxiosSecure;