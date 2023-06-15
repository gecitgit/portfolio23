import React from "react";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <div className="nav-bar">
            <Link activeClass="active" to="hero" spy smooth duration={500}>
                Home
            </Link>
            <Link activeClass="active" to="about" spy smooth duration={1000}>
                About Me
            </Link>
            <Link activeClass="active" to="projects" spy smooth duration={500}>
                Projects
            </Link>
            <Link activeClass="active" to="contact" spy smooth duration={500}>
                Contact
            </Link>
        </div>
    )
}

export default NavBar;

// function NavBar() {
//     return (
//         <div className="nav-bar">
//             <NavLink to="/">
//                 Home    
//             </NavLink>
//             <NavLink to="/about">
//                 About Me
//             </NavLink>
//             <NavLink to="/projects">
//                 Projects
//             </NavLink>
//             <NavLink to="/resume">
//                 Resume
//             </NavLink>
//         </div>
//     )
// }

// export default NavBar;