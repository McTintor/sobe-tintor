import GalleryComponent from '../components/GalleryComponent';
import './Gallery.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';

function Gallery() {

  const galleryImages = [
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
    {
      img: img5
    },
    {
        img: img6
    },
    {
    img: img7
    },
    {
    img: img8
    },
      {
        img: img9
      },
      {
        img: img10
      }
  ]

  return (
    <div className="gallery-container">
      <h2>Galerija</h2>
      <GalleryComponent
        galleryImages={galleryImages}
      />

    </div>
  );
}

export default Gallery;