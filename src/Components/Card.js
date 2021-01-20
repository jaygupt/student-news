import React from "react"; 
import './Card.css';
import Attributes from "./Attributes"; 

function Card() {
  return (
    <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
      <h3 className = "cardtext"><center>This is a card</center></h3>
      <Attributes />
    </div>
  ); 
}

export default Card; 