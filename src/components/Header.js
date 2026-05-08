import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { to: "information", label: "Profile" },
        { to: "education", label: "Education" },
        { to: "experiences", label: "Experience" },
        { to: "aiwork", label: "AI Solutions" },
        { to: "techstack", label: "Stack" },
        { to: "contact", label: "Contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-left">
                <Link
                    to="information"
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    className="brand-link"
                >
                    <span className="brand-mark">SN</span>
                    <span>
                        <span className="brand-name">Sang Nguyen</span>
                        <span className="brand-role">AI Solutions Engineer</span>
                    </span>
                </Link>
            </div>

            <button
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`header-right ${isMenuOpen ? "active" : ""}`}>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={closeMenu}
                                spy={true}
                                activeClass="active"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
