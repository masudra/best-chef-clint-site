import React from 'react';
import logo from '../../../public/baner.jpg'
import './Baner.css'

const Baner = () => {
    return (
        <div >
            <img className='baner-photo' src={logo} alt="" />
        </div>
    );
};

export default Baner;