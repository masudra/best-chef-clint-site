import React, { useEffect } from 'react';
import { useState } from 'react';
import Baner from '../../Baner/Baner';
import Recepis from '../../Recepis/Recepis';
import './Home.css'

const Home = () => {
    const [recipe ,setRecipi]=useState([])


    useEffect(()=>{
        fetch('https://best-chef-server-side-masudra.vercel.app/recipi')
        .then(res => res.json())
        .then(data =>setRecipi(data))
    },[])

    return (
        <div>
            <Baner></Baner>
            <div className='recipi-card'>
        {
            recipe.map(reci =><Recepis  key={reci.id} reci={reci}>
            </Recepis>)
        }
    
            
        </div>
        </div>
    );
};

export default Home;