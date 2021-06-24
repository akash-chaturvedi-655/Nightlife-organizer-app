import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles.css"
import image1 from "./images/D11.jpg"
import image2 from "./images/D22.jpg"
import image3 from "./images/D33.jpg"
import image4 from "./images/D44.jpg"

function App()
{
    return(
        <div className="App">        
            <AliceCarousel autoPlay autoWidth autoPlayStrategy="none" disableDotsControls="true" infinite animationType="fadeout" disableButtonsControls autoPlayInterval="2500">
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
                <img src={image4} className="sliderimg"/>
            </AliceCarousel>
        </div>
    )
}

export default App;