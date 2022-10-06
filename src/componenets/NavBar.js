import {Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function NavBar(props){

    const isLoged = useSelector((state)=> state.isLoged)
    
    return(
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li style = { {display: isLoged ? 'block' : 'none'} }>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    )
}