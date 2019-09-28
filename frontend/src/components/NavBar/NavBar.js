import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className = "Nav">
            <h1>School Agenda</h1>
            <div>
                <Link to = "/">Home</Link>
            </div>
            <div>
                <Link to = "/about">About</Link>
            </div>
            <div>
                <Link to = "/login">Log In</Link>
            </div>
            <div>
                <Link to = "/signup">Sign Up</Link>
            </div>
        </div>

    )
};

export default NavBar