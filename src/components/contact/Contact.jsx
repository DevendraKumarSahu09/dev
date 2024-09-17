import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5tqbdd5', // Replace with your EmailJS service ID
      'template_bid2yxf', // Replace with your EmailJS template ID
      form.current,
      '8vdamG_KlsKw13xbx' // Replace with your EmailJS user ID
    )
    .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
    });

    e.target.reset();
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
          <hr />
          <p className='contact_mail'>devendrasahu3837@gmail.com</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="user_name" className="contact__form-input" placeholder='Insert your name' required />
            </div>
            <div className="contact__form-div">
              <input type="text" name="contact" className="contact__form-input" placeholder='Insert your email or contact no.' required />
            </div>
          </div>

          <div className="contact__form-div">
            <input type="text" name="subject" className="contact__form-input" placeholder='Insert your subject' required />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Write your message' required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
