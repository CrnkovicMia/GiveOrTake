import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/ucitajButton.css'
export const LoadButton =(props)=>{


    const loadMoreCards = () => {
        props.cardLoad(15);
    }
    return (
        <div class="ucitajViše">
        <button class="ucitajViseButton cursors buttonStyle" onClick={loadMoreCards}>
            Učitaj više
            <div class="downArrow"><img src={require('../images/downArrow.png')} alt="downArrow" class="downArrowImagw"/></div>
        </button>
    </div>
    );
}

export function CardNumber(){
    
}