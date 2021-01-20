import React, {useEffect} from 'react';
import Card from "./Card"; 
// import './Cardview.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Cardview = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return(
        <div className = "cardList">
            <Card />
            <Card />
            <Card />
        </div> 
    );
}


export default Cardview;
