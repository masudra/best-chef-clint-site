import React from 'react';
import Header from '../Pages/Sheard/Header/Header';
import { Outlet } from 'react-router-dom';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default RecipeLayout;