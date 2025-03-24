import './About.css'
import redhouse from '../assets/redhouse.png';
import CardSlider from '../components/CardSlider';

function About() {
  return (
    <div className='about-container'>
      <div className='about-text'>
      <p className='about-text-p'>
    <strong>Dobrodošli u Sobe Tintor – Vaš dom daleko od kuće</strong><br /><br />

    Još od 2007. godine, sa puno ljubavi i posvećenosti, trudimo se da našim gostima pružimo najviši nivo udobnosti i usluge. Verujemo da pravo gostoprimstvo leži u pažnji prema svakom detalju, što su naši gosti prepoznali i zbog čega nam godinama unazad ukazuju svoje poverenje.<br /><br />

    Kao porodičan biznis, izgradili smo mesto koje odiše toplinom doma i negujemo tradicionalne vrednosti gostoprimstva. Naš cilj je da se svaki gost kod nas oseća prijatno, opušteno i dobrodošlo – bilo da dolazi radi odmora, posla ili istraživanja prelepih predela Apatina i okoline.<br /><br />

    Naše sobe su smeštene u mirnoj ulici, idealno pozicionirane između centra grada i Dunava, na samo pet minuta šetnje od oba. Ova lokacija omogućava savršen balans između urbanog i prirodnog okruženja – gosti mogu uživati u šetnjama pored reke, istraživati prirodne lepote i gastronomske specijalitete ovog kraja, a istovremeno imati brz i lak pristup svim gradskim sadržajima.<br /><br />

    Pored udobnog smeštaja, trudimo se da svakom gostu pružimo osećaj domaće atmosfere. Naše sobe su pažljivo uređene, sa ciljem da obezbede miran i prijatan boravak. Ljubaznost, gostoprimstvo i profesionalna usluga su nešto po čemu smo prepoznatljivi i što nas izdvaja.<br /><br />

    Bilo da dolazite na jednu noć ili planirate duži boravak, kod nas ćete pronaći mir, komfor i srdačnu dobrodošlicu. Radujemo se prilici da vas ugostimo i učinimo vaš boravak nezaboravnim iskustvom.<br /><br />

    <strong>Dobrodošli u Sobe Tintor – vaše mesto za odmor, opuštanje i uživanje!</strong>
</p>

        <div class="image-wrapper">
            <div class="spinning-border"></div>
            <img src={redhouse} alt="Red House" />
        </div>
      </div>
        <h1 className='align-center'>Pogledajte šta kažu gosti</h1>
      <div className="reviews">
        <CardSlider />
      </div>
    </div>
  );
}

export default About;