import React, {useEffect} from 'react';
import Card from "./Card"; 
import Aos from "aos";
import "aos/dist/aos.css";

const Cardview = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return(
        <div className = "cardList">
            <Card 
                imageSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                imageAlt="Sample Image"
                cardTitle="Hello World"
                cardSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sem aliquam, tincidunt eros vitae, tempor felis. Maecenas suscipit ex eu leo ornare, eget sollicitudin orci eleifend hell"
            />
            <Card 
                imageSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                imageAlt="Sample Image"
                cardTitle="Hello World"
                cardSummary="Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other longest texts ever on the internet, and I wanted to make my own. So here it is! This is going to be a WORLD RECORD! This is actually my third attempt at doing this. The first time, I didn't save it. The second time, the Neocities editor crashed. Now I'm writing this in Notepad, then copying it into"
            />
            <Card 
                imageSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                imageAlt="Sample Image"
                cardTitle="Hello World"
                cardSummary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sem aliquam, tincidunt eros vitae, tempor felis. Maecenas suscipit ex eu leo ornare, eget sollicitudin orci eleifend"
            />
        </div> 
    );
}


export default Cardview;
