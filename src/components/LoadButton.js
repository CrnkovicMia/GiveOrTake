import '../style/ucitajButton.css'
export const LoadButton =()=>{
    return (
        <div class="ucitajViše">
        <button class="ucitajViseButton cursors buttonStyle">
            Učitaj više
            <div class="downArrow"><img src={require('../images/downArrow.png')} alt="downArrow" class="downArrowImagw"/></div>
        </button>
    </div>
    );
}