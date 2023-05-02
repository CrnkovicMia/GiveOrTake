import '../style/Cards.css';
import { useState} from 'react';
import { supabase } from '../lib/supabaseClient';
export const Card = (props) => {
    
    const [active, setActive] = useState(false);

    const imgUrl = "https://xobfpixlhapreuruwsyk.supabase.co/storage/v1/object/public/got-img/"

    const handleClick = () => {
        setActive(!active);
    };


return (
    <div className="card-wrapper">
    <div className="card">
    <span className="heartImageSpan cursors"onClick={()=>{handleClick()}}>
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               className={active ? "heartImageRed" : "heartImage"}
               viewBox="0 0 256 256">
               <path d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"/>
               </svg>
            </span>
        <div class="cardImageDiv">
            <img src={imgUrl + props.card.picture} alt="cardImage" class="cardImage"/>

        </div>
        <div class="cardDescription">
            <div class="cardDescriptionLeft">
                <div class="itemName">
                    <h4>{props.card.title}</h4>
                </div>
                <div class="itemDescription">
                    <p>{props.card.description}</p>
                </div>
            </div>
            <div class="cardDescriptionRight">
                <div class="place">
                   <img src={require('../images/location.png')} alt="loaction" class="locationImageImage"/>
                    <span class="CityName">{props.card.location}</span>
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

}