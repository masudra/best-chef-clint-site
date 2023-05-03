import React, { useEffect } from 'react';
import { useState } from 'react';
import Login from '../../Login/Login';
import Baner from '../../Baner/Baner';

const Home = () => {
    // const [recipe ,setRecipi]=useState([])


    // useEffect(()=>{
    //     fetch('http://localhost:5000/recipi')
    //     .then(res => res.json())
    //     .then(data =>setRecipi(data))
    // },[])
    return (
        <div>
            <Baner></Baner>
        {/* {
            recipe.map(reci =><h1 key={reci.id}>{reci.name}</h1>)
        }
     */}
            
        </div>
    );
};

export default Home;