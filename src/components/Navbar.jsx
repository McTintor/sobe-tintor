import React, { useEffect, useState } from 'react';
import './Navbar.css';

function pageReload() {
    window.location.reload();
}

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#pocetna');

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

    const handleLinkClick = (hash) => {
        setActiveLink(hash);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${showNavbar ? "visible" : "hidden"} navbar`}>
            <div className='navbar-logo'>
                <img src="/logo.png" alt="Logo" onClick={pageReload} />
                <h3><i>Sobe Tintor</i></h3>
                <button className="hamburger-menu" onClick={toggleMobileMenu}>
                    ☰
                </button>
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
                <li><a href="#pocetna" className={activeLink === '#pocetna' ? 'active' : ''} onClick={() => handleLinkClick('#pocetna')}>Početna</a></li>
                <li><a href="#onama" className={activeLink === '#onama' ? 'active' : ''} onClick={() => handleLinkClick('#onama')}>O nama</a></li>
                <li><a href="#galerija" className={activeLink === '#galerija' ? 'active' : ''} onClick={() => handleLinkClick('#galerija')}>Galerija</a></li>
                <li><a href="#cenovnik" className={activeLink === '#cenovnik' ? 'active' : ''} onClick={() => handleLinkClick('#cenovnik')}>Cenovnik</a></li>
                <li><a href="#kontakt" className={activeLink === '#kontakt' ? 'active' : ''} onClick={() => handleLinkClick('#kontakt')}>Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;