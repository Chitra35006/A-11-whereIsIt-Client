import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://a-11-where-is-it-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            (response) => response,  // Pass successful responses through
            (error) => {
                console.log('Error caught in interceptor:', error);

                // Handle only if response exists
                if (error.response) {
                    const status = error.response.status;
                    
                    // Check for 401 or 403
                    if (status === 401 || status === 403) {
                        console.log('Unauthorized/Forbidden - Logging out user');
                        
                        logOut()
                            .then(() => {
                                console.log('Logged Out User');
                                navigate('/signIn');
                            })
                            .catch(logOutError => {
                                console.error('Logout failed:', logOutError);
                            });
                    }
                } else {
                    console.error('Network/Server Error:', error.message);
                }

                return Promise.reject(error);  // Always return the error to continue the rejection chain
            }
        );

        // Eject the interceptor on cleanup to avoid duplicate interceptors
        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, [logOut, navigate]);

    return axiosInstance;
};

export default useAxiosSecure;
