import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav className='navBar p-2 d-flex justify-content-center bg-info'>
            <Link to='/'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Header;