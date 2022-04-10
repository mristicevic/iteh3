import React from 'react';
import Mod from "../assets/modal.jpg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={Mod} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Da li želite da učestvujete u </p>
            <h1>NAGRADNOJ IGRI</h1>
            <p>I osvojite vredne nagrade?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>DA,</span> jedva čekam!
            </button>
            <button className='btnOutline'>
              <span className='bold'>NE</span>, neki drugi put
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;