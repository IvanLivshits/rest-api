import React from 'react';
import './navbar.css'
import navbar_logo from '../../assets/img/navbar_logo.svg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={navbar_logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">AERO REST API</div>
                <div className="navbar__login"><NavLink to="/login">Log In</NavLink></div>
                <div className="navbar__registration"><NavLink to="/registration">Sign Up</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;