import React from "react";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <div className="nav-bar">
            <Link activeClass="active" to="hero" href="#hero" spy smooth duration={500}>
                Home
            </Link>
            <Link activeClass="active" to="about" href="#about" spy smooth duration={1000}>
                About Me
            </Link>
            <Link activeClass="active" to="projects" href="#projects" spy smooth duration={500}>
                Projects
            </Link>
            <Link activeClass="active" to="contact" href="#contact" spy smooth duration={500}>
                Contact
            </Link>
        </div>
    )
}

export default NavBar;