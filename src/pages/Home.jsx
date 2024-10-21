import React from 'react';

import '../css/home.css';
import heroimg from '../images/restauranfood.jpg'

const Home = () => {
    return (<>
        <main>
            <section className="hero">
                <div className="warper">
                    <div className="leftContent">
                        <div className="text">
                            <h1>Little lemon</h1>
                            <h3>Chicago</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        {/* Button comp */}
                    </div>
                    <img src={heroimg} alt="Restaurant service" />
                </div>
            </section>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
        </main>
    </>);
}
export default Home;