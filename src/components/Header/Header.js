import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-menue'>
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <>
                    <Link to="/login">Login</Link>
                    <Link to='signup'>Sign up</Link>
                </>
            </div>
        </nav>
    );
};

export default Header; 