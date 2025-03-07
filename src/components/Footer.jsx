import React from 'react';
import './Footer.css'; // Assuming you will add some styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;