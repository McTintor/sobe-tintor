import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function pageReload() {
    window.location.reload();
}

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('pocetna');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleSetActive = (section) => {
        setActiveLink(section);
    };

    return (
        <nav className={`${showNavbar ? "visible" : "hidden"} navbar`}>
            <div className='navbar-logo'>
                <img src="/logo.png" alt="Logo" onClick={pageReload} />
                <h3><i>Sobe Tintor</i></h3>
            </div>
            <button className="hamburger-menu" onClick={toggleMobileMenu}>
                ☰
            </button>
            <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <li>
                    <Link
                        to="pocetna"
                        smooth={true}
                        duration={100}
                        spy={true}
                        onSetActive={handleSetActive}
                        className={activeLink === 'pocetna' ? 'active' : ''}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Početna
                    </Link>
                </li>
                <li>
                    <Link
                        to="onama"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={70} 
                        onSetActive={handleSetActive}
                        className={activeLink === 'onama' ? 'active' : ''}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        O nama
                    </Link>
                </li>
                <li>
                    <Link
                        to="galerija"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={50}
                        onSetActive={handleSetActive}
                        className={activeLink === 'galerija' ? 'active' : ''}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Galerija
                    </Link>
                </li>
                <li>
                    <Link
                        to="kontakt"
                        smooth={true}
                        duration={100}
                        spy={true}
                        offset={70}
                        onSetActive={handleSetActive}
                        className={activeLink === 'kontakt' ? 'active' : ''}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;