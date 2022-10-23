import React from 'react';
import './navbar.css'
import navbar_logo from '../../assets/img/navbar_logo.svg'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="container">
                <img src={navbar_logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">AERO REST API</div>
                {!isAuth && 
                    <div className="navbar__login">
                        <NavLink to="/login">Log In</NavLink>
                    </div>
                }
                {!isAuth && 
                    <div className="navbar__registration">
                        <NavLink to="/registration">Sign Up</NavLink>
                    </div>
                }
                {isAuth && 
                    <div className="navbar__login" onClick={() => dispatch(logout())}>
                        <NavLink>Log Out</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;