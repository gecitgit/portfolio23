import React from "react";
import {NavLink} from "react-router-dom";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/">
                Home    
            </NavLink>
            <NavLink to="/about">
                About Me
            </NavLink>
            <NavLink to="/projects">
                Projects
            </NavLink>
            <NavLink to="/resume">
                Resume
            </NavLink>
        </div>
    )
}

export default NavBar;