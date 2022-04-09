import React from "react";
import Izlog from "../assets/izlog.jpg";
import "../styles/Contact.css";
import emailjs from "emailjs-com"

function Contact() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_opdfaoj',
    'template_o1q0ia8',
     e.target, 
    'dE17TyUzkFF2bQQR-').then(res=>{
      console.log(res)
    }).catch(err=>console.log(err));
    e.target.reset();
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Izlog})` }}
      ></div>
      <div className="rightSide">
        <h1> Kontaktirajte nas </h1>

        <form   onSubmit={sendEmail}>
          <label htmlFor="name">Ime</label>
          <input name="name" placeholder="Upišite svoje ime..." type="text" />
          <label htmlFor="email">Email </label>
          <input name="email" placeholder="Upišite email adresu..." type="email" />
          <label htmlFor="message">Poruka</label>
          <textarea
            rows="6"
            placeholder="Tekst poruke..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Pošaljite poruku</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
