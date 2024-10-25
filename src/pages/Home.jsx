import React from 'react';

import '../css/home.css';
import heroimg from '../images/restauranfood.jpg';
import { Button, Text } from "@chakra-ui/react";

import Testimonial from '../components/Testimonial';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigator = useNavigate();
    return (<>
        <div className="main-warper">
            <section className="hero">
                <div className="leftContent">
                    <div className="text">
                        <h1>Little lemon</h1>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    {/* Button comp */}
                    <Button size="xl" colorPalette='yellow' style={{ padding: '0 2rem', marginTop: '2.7rem' }}
                        onClick={() => navigator('/booking')}>
                        <Text fontWeight='bold' textStyle='lg'>Reserve a table</Text>
                    </Button>
                </div>
                <img src={heroimg} alt="Restaurant service" />
            </section>
        </div>
        <section className='testimonial' style={{ padding: '10rem 0' }}>
            <Testimonial />
        </section>
    </>);
}
export default Home;