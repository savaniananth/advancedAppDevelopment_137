import {gsap, Power3} from 'gsap';
import React from 'react';
import './App.css';
import GsapAnim from './Gsap';
function Main_Gsap() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <div className="hero">
      <div className="container">

        {/* <Images timeline = {tl} ease = {ease}/> */}
      </div>
    </div>
  );
}

export default Main_Gsap;