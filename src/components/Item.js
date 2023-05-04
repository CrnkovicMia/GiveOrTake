import "../style/Item.css";

import { useState, useEffect } from "react";
import { LinkedItems } from "../components/LinkedItems.js";
import { supabase } from "../lib/supabaseClient";
import { useSearchParams } from "react-router-dom";

export const Item = () =>{

    const [card, setCard] = useState({
        id: null,
        title: "",
        description: "",
        location: "",
        picture: ""
    });
    const [clicked, setActive] = useState(false);
    const [searchParams] = useSearchParams();

    const itemId = searchParams.get('id');
    const imgUrl = "https://xobfpixlhapreuruwsyk.supabase.co/storage/v1/object/public/got-img/"

    useEffect(() => {
        getCard();
    }, []);

    useEffect(() => {
        imageClick(0)
    }, [card]);

    const handleClick = () => {
        setActive(!clicked);
    };



    async function getCard(){
        const { data } = await supabase.from('Card').select().eq('id', itemId).single();
        setCard(data);
        console.log(card)
    }

    const imag = [
        {id:0, value:imgUrl+card.picture}, 
        {id:1,  value:require('../images/image1.jpg')},
        {id:2,  value:require('../images/image2.jpg')}, 
        {id:3,  value:require('../images/cardImages/cardImage5.png')}
    ];
     const [sliderData, setsliderData] = useState(imag[0]);

    const imageClick = (index) =>{
        const slider = imag[index];
        setsliderData(slider);
    };

    return(
        <>
           <div className="mainContenr">
            <div className="images">
                <div className="mainPhoto">
                    <img src={sliderData.value} className="mainPhotoImg"/>
                </div>
                <div className="otherVersions">
                {imag.map((data, i) =>
                 <div className="otherPhotos">
                    <img key={data.id} src={data.value} className="otherPhotosImg" onClick={()=>imageClick(i)}/>
                </div>
                )}
                </div>
            </div>
            <div className="itemInfoDiv">
                <div className="infoTop">
                    <div className="itemButtons">
                      <button className="opisButton">OPIS</button>
                     <button className="recenzijeButton">RECENZIJE</button>
                    </div>
                    <span  onClick={()=>{handleClick()}}>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        className={clicked ? "heartImageRed" : "heartImage"}
                        viewBox="0 0 24 24"
                        ><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/>
                        </svg>
                       
                    </span>
                </div>
                <div className="itemInfo">
                    <div className="infoLeft">
                        <span className="spanTitle"><strong>{card.title}</strong></span>
                        <span className="location">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z"/>
                            </svg>
                            <label>{card.location}</label>
                        </span>
                        <span className="textChange">{card.description}</span>
                    </div>
                    <div className="infoRight">
                        <div className="properties">
                        <span className="line"><strong>Kategorija: </strong></span>
                        <span className="line"><strong>Veličina: </strong></span>
                        <span className="line"><strong>Boja: </strong></span>
                        <span className="line"><strong>Datum objave: </strong></span>
                        <span className="line"><strong>Istek oglasa: </strong></span>
                        <span className="line"><strong>Pregledi: </strong></span>
                        </div>
                        <div className="propertiesValues">
                        <span className="line">Obuća</span>
                        <span className="line">42</span>
                        <span className="line">Plava</span>
                        <span className="line">27.04.2023.</span>
                        <span className="line">13 dana</span>
                        <span className="line">3</span>
                        </div>
                    </div>
                </div>
                <div className="itemInfoBottom">
                    <button className="kontaktirajButton">Kontaktiraj vlasnika</button>
                </div>
            </div>
        </div>
        </>
    );
};