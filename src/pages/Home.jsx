import React from 'react';
import './Home.css';
import first from '../assets/2.jpg';
import second from '../assets/3.jpg';
import third from '../assets/10.jpg';
import wifi from '../assets/wifi.png';
import family from '../assets/family.png';
import exp from '../assets/exp.png';
import location from '../assets/location.jpg';
import ImageSlider from '../components/ImageSlider';

const IMAGES = [
    { url: first, alt: "First" },
    { url: second, alt: "Second" },
    { url: third, alt: "Third" },
];

const Home = () => {
    return (
        <>
        <div className="home" aria-label='Home'>
            <ImageSlider images={IMAGES} />
            <div className="home-cards">
                <div className="home-card">
                    <div className="img-card">
                        <img src={exp} alt="Iskustvo" />
                    </div>
                    <div className='home-card-text'>
                        <h2>15+ Godina sa Vama</h2>
                        <p>Od 2007. godine, stalno se trudimo da gosti imaju najbolje uslove i uslugu, zbog čega nam kontinuirano ukazuju poverenje.</p>
                    </div>
                </div>
                <div className="home-card">
                    <div className="img-card">
                        <img src={family} alt="Porodica" />
                    </div>
                    <div className='home-card-text'>
                        <h2>Porodična Atmosfera</h2>
                        <p>Kao porodičan biznis, oduvek nastojimo da održavamo porodične vrednosti gde svaki gost može podjednako da uživa.</p>
                    </div>
                </div>
                <div className="home-card">
                    <div className="img-card">
                        <img src={location} alt="Lokacija" />
                    </div>
                    <div className='home-card-text'>
                        <h2>Savršena Lokacija</h2>
                        <p>Sobe Tintor nalaze se u mirnoj ulici, idealno smeštene između centra Apatina i Dunava, na samo 5 minuta od oba.</p>
                    </div>
                </div>
                <div className="home-card">
                    <div className="img-card">
                        <img src={wifi} alt="Iskustvo" />
                    </div>
                    <div className='home-card-text'>
    <h2>Udobnost i Zajedništvo</h2>
    <p>Uživajte u modernim sadržajima, prostranom dvorištu i opuštajućoj atmosferi za sve uzraste.</p>
</div>

                </div>
            </div>
        </div>
        </>
    );
};

export default Home;