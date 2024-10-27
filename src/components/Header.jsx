import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg'
import '../css/header.css';

const Header = ()=>{
    return (
        <header>
        <img src={logo} alt="Logo"/>
        <nav labelledBy="Navigator" describedby="where to change page">
        <ul>
            <li labelledBy="Home page Link"><Link to="/">Home</Link></li>
            <li labelledBy="About page Link"><Link to="/about">About</Link></li>
            <li labelledBy="Menu page Link"><Link to="/">Menu</Link></li>
            <li labelledBy="Reversations page Link"><Link to="/booking">Reversations</Link></li>
            <li labelledBy="Order page Link"><Link to="/">Order online</Link></li>
            <li labelledBy="Login page Link"><Link to="/">Login</Link></li>
        </ul>
        </nav>
  </header>
    );
}

export default Header;