import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#pocetna">Početna</a></li>
                <li><a href="#onama">O nama</a></li>
                <li><a href="#galerija">Galerija</a></li>
                <li><a href="#cenovnik">Cenovnik</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;