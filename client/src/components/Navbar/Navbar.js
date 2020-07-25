import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/">Home</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/buysell">Buy Sell</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/listings">Listings</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/login">Login</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/mylistings">My Listings</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/newlisting">New Listing</Link></span>
        </nav>
    )
}

export default Navbar;

