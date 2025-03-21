import './Contact.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const formRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Success:", result.text);
      setStatusMessage({ type: "success", text: "Uspesno." });
      setFormData({ name: '', email: '', message: '' });
      formRef.current.reset();

      setTimeout(() => {
        setStatusMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Failed:", error);
      setStatusMessage({
        type: "error",
        text: 'Nesto je poslo po zlu. Pokusajte ponovo.',
      });
      setTimeout(() => {
        setStatusMessage(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
        <>
            <div className="contact-container">
                <div className="left">
                    <div className="mapa">
                        <h3>Kako do nas:</h3>
                        <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5575.001395607742!2d18.980933729390532!3d45.680923011685685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cc6338afabf0b%3A0x40cea7ef457b10ec!2sSobe%20Tintor!5e0!3m2!1sen!2srs!4v1742550194135!5m2!1sen!2srs"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                    </div>
                    <div className="kontakt-info">
                        <p>Telefon: +381647222901</p>
                        <p>E-Mail: zeljkatintor@gmail.com</p>
                        <p>Adresa: Ribarska 62 Apatin</p>
                    </div>
                </div>
                <div className="right">
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="inputs">
            <div className='input-div'>
            <label className='' htmlFor="name">{}</label>
          <input
            className=''
            id="name"
            type="text"
            name="name"
            placeholder='Ime'
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          </div>
          <div className='input-div'>
            <label className='' htmlFor="email">E-Mail</label>
          <input
            className=''
            id="email"
            type="email"
            name="email"
            placeholder='peroperic@gmail.com'
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          </div>
          </div>
          <div className='textarea-div'>
            <label className='' htmlFor="message">Poruka</label>
          <textarea
            className=''
            id="message"
            name="message"
            placeholder='Vasa poruka'
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          </div>
          <button className='submitbtn' type="submit" disabled={isSubmitting}>{isSubmitting ? 'Salje se' : 'Poslato'} </button>
        </form>

        {statusMessage && (
        <p
          style={{
            color: statusMessage.type === "success" ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {statusMessage.text}
        </p>
      )}
                </div>
            </div>
        </>
    );
};

export default Contact;