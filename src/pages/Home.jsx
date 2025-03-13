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
import ErrorBoundary from '../components/ErrorBoundary';

const IMAGES = [
    { url: first, alt: "First" },
    { url: second, alt: "Second" },
    { url: third, alt: "Third" },
];

const Home = () => {
    return (
        <>
        <div className="home" aria-label='Home'>
            <ErrorBoundary>
                <ImageSlider images={IMAGES} />
            </ErrorBoundary>
            <div className="home-cards">
                <div className="home-card">
                    <div className="img-card">
                        <img src={exp} alt="Iskustvo" />
                    </div>
                    <div className='home-card-text'>
                        <h2>15+ Godina sa Vama</h2>
                        <p>Počevši od 2007. godine od samog osnivanja prenoćišta intenzivno vodimo računa kako bi gosti uvek imali najbolje ugostiteljsko iskustvo. Zato nam gosti daju njihovo poverenje iz godine u godinu.</p>
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
                        <h2>Idealna Lokacija</h2>
                        <p>Sobe Tintor se nalaze u zlatnoj sredini Apatina, u mirnoj ulici gde gosti imaju privatnost, ali takođe na 5 minuta od samog centra kao i Dunava.</p>
                    </div>
                </div>
                <div className="home-card">
                    <div className="img-card">
                        <img src={wifi} alt="Iskustvo" />
                    </div>
                    <div className='home-card-text'>
                        <h2>Maksimalan Komfor</h2>
                        <p>Sa wifi-jem koji pokriva celo imanje, velikim dvorištem, televizorima u svakoj sobi i velikim izborom društvenih igara, svako od 1 do 101 godine može da se zabavi i uživa.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;