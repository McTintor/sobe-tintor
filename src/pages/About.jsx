import './About.css'
import redhouse from '../assets/redhouse.png';

function About() {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, illo eius. Consectetur, natus earum, provident cumque nisi inventore nemo quas, dicta accusamus sequi ab? Praesentium tenetur incidunt vel labore ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis blanditiis dicta quas illum soluta impedit, rem molestias vel quidem sed ad nam laboriosam ducimus error nihil veritatis pariatur magni voluptate!</p>
        <div class="image-wrapper">
            <div class="spinning-border"></div>
            <img src={redhouse} alt="Red House" />
        </div>
      </div>
      <div className="reviews">
        <h1>Pogledajte sta kazu gosti</h1>
      </div>
    </div>
  );
}

export default About;