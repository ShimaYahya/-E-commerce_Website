import React from 'react';
import dollar_sign from './Photo/dollar_sign.png'
import cart_9 from './Photo/cart_9.png'
import "../App.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    let productsid = useSelector((state) => state.cart.addOnePToCart);
    let counter = productsid.length;

    return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">
                        <img src={dollar_sign} alt="" width="35" height="30" className="d-inline-block align-text-top" />
                        WickedSales
                    </Link>
                    <Link to={'/cart'} className="navbar-brand">
                        <img src={cart_9} alt="" width="30" height="30" className="d-inline-block align-text-top" />
                        <span className='counter'>{counter}</span>
                    </Link>
                </div>
            </nav>
    );
};

export default Navbar;