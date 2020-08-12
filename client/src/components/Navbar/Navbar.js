import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/">Login</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/dashboard">Dashboard</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/listings">Listings</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/newlisting">New Listing</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/about">About</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/contact">Contact</Link></span>
            <span className="navbar-brand mb-0 h1 text-dark navlink"><Link to="/signup">Logout</Link></span>
        </nav>
    )
}

export default Navbar;

