import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import male1 from '../assets/male1.png';
import male2 from '../assets/male2.png';
import male3 from '../assets/male3.png';
import female1 from '../assets/female1.png';
import female2 from '../assets/female2.png';

const CardSlider = () => {

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div 
            className={className} 
            style={{ ...style, display: "block", background: "black" }} 
            onClick={onClick}
          />
        );
      };
    
      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div 
            className={className} 
            style={{ ...style, display: "block", background: "black" }} 
            onClick={onClick}
          />
        );
      };

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 1 }
          }
        ]
      };

  return (
    <Slider {...settings} className="slider">
        <div className="padder">
        <div className="review-card">
            <h3>Ime</h3>
            <img src={male1} alt="Slide 1" />
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>5/5</p>
            <hr />
            <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo error architecto quas unde praesentium eveniet reprehenderit voluptatibus. Beatae placeat animi minus eius, maiores cum. Aliquid laboriosam reprehenderit dicta sed?</p>
        </div>
        </div>
        <div className="padder">
        <div className="review-card">
            <h3>Ime</h3>
            <img src={male2} alt="Slide 2" />
            <h4>⭐⭐⭐⭐</h4>
            <p>4/5</p>
            <hr />
            <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo error architecto quas unde praesentium eveniet reprehenderit voluptatibus. Beatae placeat animi minus eius, maiores cum. Aliquid laboriosam reprehenderit dicta sed?</p>
        </div>
        </div>
        <div className="padder">
        <div className="review-card">
            <h3>Ime</h3>
            <img src={female1} alt="Slide 3" />
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>5/5</p>
            <hr />
            <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo error architecto quas unde praesentium eveniet reprehenderit voluptatibus. Beatae placeat animi minus eius, maiores cum. Aliquid laboriosam reprehenderit dicta sed?</p>
        </div>
        </div>
        <div className="padder">
        <div className="review-card">
            <h3>Ime</h3>
            <img src={male3} alt="Slide 4" />
            <h4>⭐⭐⭐⭐⭐</h4>
            <p>5/5</p>
            <hr />
            <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo error architecto quas unde praesentium eveniet reprehenderit voluptatibus. Beatae placeat animi minus eius, maiores cum. Aliquid laboriosam reprehenderit dicta sed?</p>
        </div>
        </div>
        <div className="padder">
        <div className="review-card">
            <h3>Ime</h3>
            <img src={female2} alt="Slide 5" />
            <h4>⭐⭐⭐⭐</h4>
            <p>4/5</p>
            <hr />
            <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo error architecto quas unde praesentium eveniet reprehenderit voluptatibus. Beatae placeat animi minus eius, maiores cum. Aliquid laboriosam reprehenderit dicta sed?</p>
        </div>
        </div>
    </Slider>
  );
};

export default CardSlider;
