import React, {useEffect} from 'react';
import Attributes from "./Attributes"; 
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
                <h3 className = "cardtext"><center>This is a card</center></h3>
                <Attributes />
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className = "cardtext"><center>This is a card</center></h3>
                <Attributes />
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className = "cardtext"><center>This is a card</center></h3>
                <Attributes />
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className = "cardtext"><center>This is a card</center></h3>
                <Attributes />
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className = "cardtext"><center>This is a card</center></h3>
                <Attributes />
            </div>

            <div className = "main-cards" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className = "cardtext"><center>This is a card</center></h3>
                <Attributes />
            </div>
        </div> 
    );
}


export default Cardview;
