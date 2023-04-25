import '../style/Cards.css';
import { useState} from 'react';
export const Card = () => {
    
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

return (
    <div class="card-wrapper">
    <div class="card">
    <span class="heartImageSpan cursors"onClick={()=>{handleClick()}}>
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               className={active ? "heartImageRed" : "heartImage"}
               viewBox="0 0 256 256">
               <path d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"/>
               </svg>
            </span>
        <div class="cardImageDiv">
            <img src={require('../images/cardImages/cardImage5.png')} alt="cardImag" class="cardImage"/>
           
        </div>
        <div class="cardDescription">
            <div class="cardDescriptionLeft">
                <div class="itemName">
                    <h4>Nike Air Jordan 1s</h4>
                </div>
                <div class="itemDescription">
                    <p>Poklanjam NikeAir Jordan 1s, velicine: 44...</p>
                </div>
            </div>
            <div class="cardDescriptionRight">
                <div class="place">
                   <img src={require('../images/location.png')} alt="loaction" class="locationImageImage"/>
                    <span class="CityName">Rovinj</span>
                </div>
                <div class="viseButtonDiv">
                    <button class="višeButton cursors buttonStyle">Više &#8594;</button>
                </div>
            </div>
        </div>
    </div>
</div>
);
};