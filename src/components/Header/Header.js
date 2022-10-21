import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../images/Logo.svg'
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
    const { user, handelLogOut } = useContext(AuthContext);
    // console.log(user);
    const logOut = () => {
        handelLogOut()
            .then(result => {
                const user = result.user;

            })
            .catch(error => console.error(error));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p className='text-white'>{user?.displayName ? user.displayName : user?.email}</p>
            <div className='header-menue'>
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user?.uid ?
                        <Link onClick={logOut}>Sign Out</Link>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to='signup'>Sign up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header; 