import React from 'react';
import './Home.css';
import first from '../assets/2.jpg';
import second from '../assets/3.jpg';
import third from '../assets/10.jpg';
import ImageSlider from '../components/ImageSlider';
import ErrorBoundary from '../components/ErrorBoundary';

const IMAGES = [
    { url: first, alt: "First" },
    { url: second, alt: "Second" },
    { url: third, alt: "Third" },
];

const Home = () => {
    return (
        <>
        <div className="home">
            <ErrorBoundary>
                <ImageSlider images={IMAGES} />
            </ErrorBoundary>
        </div>
        </>
    );
};

export default Home;