import React from 'react';
import redhouse from '../assets/redhouse.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <img src={redhouse} alt="Red House" />
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
        </div>
    );
};

export default Home;