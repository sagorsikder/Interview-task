import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div container>
            <h1 className='text-center mb-5'>This page not found.</h1>
            <p className='text-center'>plese click  <Link to='/'>Home</Link></p>
           
        </div>
    );
};

export default Error;