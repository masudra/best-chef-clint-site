import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatRoute = ({children}) => {
    const {user,loding}=useContext(AuthContex)
    const loction = useLocation();
    // console.log(loction)


    if(loding){
        return <ProgressBar striped variant="success" now={40} />

    }
        
            if(user){
                return children;
            }
            return <Navigate state={{from: loction}} to='/login' replace={true}></Navigate>
            
    
};

export default PrivatRoute;