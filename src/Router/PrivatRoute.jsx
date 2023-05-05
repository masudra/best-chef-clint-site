import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

const PrivatRoute = ({children}) => {
    const {user,loding}=useContext(AuthContex)
    const loction = useLocation();


    if(loding){
        return <div>
        <ProgressBar striped variant="success" now={40} />
        <ProgressBar striped variant="info" now={20} />
        <ProgressBar striped variant="warning" now={60} />
        <ProgressBar striped variant="danger" now={80} />
      </div>

    }
        
            if(user){
                return children;
            }
            return <Navigate state={{from: loction}} to='/login' replace={true}></Navigate>
            
    
};

export default PrivatRoute;