import React from "react"; 
import './Card.css';
import Attributes from "./Attributes"; 

function Card(props) {
  return (
    <div className="main-cards" data-aos="zoom-in" data-aos-duration="1000">
      <div className="cardElements">
        <img src={props.imageSrc} width="160px" height="160px" alt={props.imageAlt} className="cardImage"/>
        <div className="cardText">
          <h3 className="cardTitle">{props.cardTitle}</h3>
          <p className="cardSummary">{props.cardSummary.substring(0, 190)}...</p>
        </div>
      </div>
      <Attributes />
    </div>
  ); 
}

export default Card; 