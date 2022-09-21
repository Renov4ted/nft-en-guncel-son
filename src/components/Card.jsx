import React from 'react';
import PNG1 from "../assets/Footer/1.png";
import BATU from "../assets/Footer/Batu.png";
import FATİH from "../assets/Footer/Fatih.png";
import FURKAN from "../assets/Footer/Furkan.png";
import NAZIRE from "../assets/Footer/Nazire.png";

import Carousel from './Carousel';

function Card() {
  return (
    <div style={{
    }} className="App">
      <Carousel autoplay interval={3000}>
        <div><img src={FATİH} alt="" /></div>
        <div><img src={FURKAN} alt="" /></div>
        <div><img src={NAZIRE} alt="" /></div>
        <div><img src={BATU} alt="" /></div>
        <div><img src={PNG1} alt="" /></div>
      </Carousel>
    </div>
  );
}


export default Card
