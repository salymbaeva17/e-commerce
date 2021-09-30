import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const cart = useSelector(s => s.cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto">
                       <li><NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink></li>
                        <li> <NavLink to="/cart" className="nav-link" href="#">Cart({cart.length})</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;