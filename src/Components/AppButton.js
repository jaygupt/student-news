import React, {useState} from "react"; 
import Button from '@material-ui/core/Button';

function AppButton(props) {
  const [currentColor, setCurrentColor] = useState("white"); 

  function handleMouseOver() {
    setCurrentColor(props.buttonColor); 
  }

  function handleMouseOut() {
    setCurrentColor(props.currentColor); 
  }
    
  return (
    <Button 
      style={{backgroundColor: currentColor}}  
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >{props.type} {props.icon}</Button>
  );
}

export default AppButton; 