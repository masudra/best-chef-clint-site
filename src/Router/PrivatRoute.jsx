import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivatRoute = ({children}) => {
    const {user,loding}=useContext(AuthContex)
    if(loding){
        return <ProgressBar striped variant="success" now={40} />

    }
        
            if(user){
                return children;
            }
            return <Navigate to='/login' replace={true}></Navigate>
            
    
};

export default PrivatRoute;