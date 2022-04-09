import React from "react";
import Izlog from "../assets/izlog.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Izlog})` }}
      ></div>
      <div className="rightSide">
        <h1> Kontaktirajte nas </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Ime</label>
          <input name="name" placeholder="Upišite svoje ime..." type="text" />
          <label htmlFor="email">Email</label>
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
