import React from 'react';
import Header from '../Pages/Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import Baner from '../Pages/Baner/Baner';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;