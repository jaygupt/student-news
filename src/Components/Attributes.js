import React from "react"; 
import AppButton from "./AppButton";
import {ThumbUp, ThumbDown, Share} from '@material-ui/icons'; 
import "./Attributes.css"

function Attributes() {
  return (
    <div className="main-div">
      <hr className="card-line"/>
      <ul className="card-attributes">
        <li><AppButton 
          type="Like" 
          icon={<ThumbUp fontSize="medium"/>}
          buttonColor="#1DA1F2"
        /></li>
        <li><AppButton 
          type="Dislike" 
          icon={<ThumbDown fontSize="medium"/>}
          buttonColor="#DFE1E4"
        /></li>
        <li><AppButton 
          type="Share" 
          icon={<Share fontSize="medium"/>}
          buttonColor="#FF4477"  
        /></li>
      </ul>
    </div>
  ); 
}

export default Attributes; 