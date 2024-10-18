import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <header>
        <img src="/public/Logo.svg" alt="Logo"/>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/booking">Reversations</Link></li>
            <li><Link to="/">Order online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
        </nav>
  </header>
    );
}

export default Header;