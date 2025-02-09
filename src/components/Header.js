import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1>Sang Nguyen</h1>
            </div>
            <nav className="header-right">
                <ul>
                    <li>
                        <Link to="information" smooth={true} duration={500}>
                            Information
                        </Link>
                    </li>
                    <li>
                        <Link to="education" smooth={true} duration={500}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="experiences" smooth={true} duration={500}>
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link to="techstack" smooth={true} duration={500}>
                            Tech Stack
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
