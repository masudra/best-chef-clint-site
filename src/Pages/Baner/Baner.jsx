import React from 'react';
import logo from '../../../public/baner.jpg'
import './Baner.css'

const Baner = () => {
    return (
        <div className='mr' >
            <img className='baner-photo' src={logo} alt="" />
        </div>
    );
};

export default Baner;