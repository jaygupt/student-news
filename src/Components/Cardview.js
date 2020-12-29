import React, {useEffect} from 'react';
import './Cardview.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Cardview = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return(
        <div className = "cardList">
            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3><center>This is a card</center></h3>
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3><center>This is a card</center></h3>
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3><center>This is a card</center></h3>
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3><center>This is a card</center></h3>
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3><center>This is a card</center></h3>
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3><center>This is a card</center></h3>
            </div>
        </div> 
    );
}


export default Cardview;
