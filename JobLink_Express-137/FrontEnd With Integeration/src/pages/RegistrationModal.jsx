// RegistrationModal.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../components/Redux/Actions/ProductActions';

function RegistrationModal({ setOpenModal }) {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Checkrole, setCheckRole] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', userName);
    localStorage.setItem('pass', pass);
    localStorage.setItem('phoneNumber', phoneNumber);
    dispatch(setRole(userName, pass, Checkrole));
    setUserName('');
    setPass('');
    setPhoneNumber('');
    setCheckRole('');
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="modal_container">
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button className="bti" onClick={() => setOpenModal(false)}>X</button>
            </div>
            <div>
              <div className='p-4 conn'>
                <div className='text-center text-md-start d-flex flex-column justify-content-center'>
                  <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                    Time To Get Placed In Your<br />
                    <span className="text-primary">Dream Company</span>
                  </h1>
                  <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                  </p>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className='d-flex justify-content-center mb-4'>
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    value="subscribe"
                  />
                  <label htmlFor="newsletter">Subscribe to our newsletter</label>
                </div>
                <button type="submit" className='w-100 mb-4'>Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegistrationModal;
