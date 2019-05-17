import React, {Component} from 'react';
import './Navbar.scss'
import logo from '../../logo.svg';

function Navbar(){
    return(
        <nav className="navbar">
        <img src={logo} className="navbar-logo" alt="" width="100px"/>
        <ul className="navbar-links">
        <li><a href="" className="navbar-link">Home</a></li>
        <li><a href="" className="navbar-link">About</a></li>
        <li><a href="" className="navbar-link">Tours</a></li>
        </ul>
        </nav>
    )
}

export default Navbar