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
                <ul labelledBy="Navigator" describedby="where to change page">
                    <li labelledBy="Home page Link"><Link to="/">Home</Link></li>
                    <li labelledBy="About page Link"><Link to="/about">About</Link></li>
                    <li labelledBy="Menu page Link"><Link to="/">Menu</Link></li>
                    <li labelledBy="Reversations page Link"><Link to="/booking">Reversations</Link></li>
                    <li labelledBy="Order page Link"><Link to="/">Order online</Link></li>
                    <li labelledBy="Login page Link"><Link to="/">Login</Link></li>
                </ul>
            </section>
            <section>
                <h5>Contact</h5>
                <ul labelledBy="Contact" describedby="All the ways to contact us">
                    <li><Link to="/">Address</Link></li>
                    <li><Link to="/">Phone number</Link></li>
                    <li><Link to="/">Email</Link></li>
                </ul>
            </section>
            <section>
                <h5>Social Media links</h5>
                <ul labelledBy="Our social media link">
                    <li><a href="https://facebook.com" target="_blank" >Facebook</a></li>
                    <li><a href="https://twister.com" target="_blank" >Twister</a></li>
                </ul>
            </section>
            </div>
        </footer>
    );
}

export default Footer;