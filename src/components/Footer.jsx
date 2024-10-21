import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_footer.png'
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Footer Logo" />
            <div className="links">
            <section>
                <h5>Doormat Navigation</h5>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/booking">Reversations</Link></li>
                    <li><Link to="/">Order online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </section>
            <section>
                <h5>Contact</h5>
                <ul>
                    <li><Link to="/">Address</Link></li>
                    <li><Link to="/">Phone number</Link></li>
                    <li><Link to="/">Email</Link></li>
                </ul>
            </section>
            <section>
                <h5>Social Media links</h5>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" >Facebook</a></li>
                    <li><a href="https://twister.com" target="_blank" >Twister</a></li>
                </ul>
            </section>
            </div>
        </footer>
    );
}

export default Footer;